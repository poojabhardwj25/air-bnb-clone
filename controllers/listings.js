const Listing=require("../models/listing.js");
const geocode = require("../utils/geocode.js");


module.exports.index=(async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
});      

module.exports.renderNewForm=(req,res)=>{
    console.log("user-",req.user)
    res.render("listings/new.ejs")
};

module.exports.showListing=async(req,res)=>{
    let {id}=req.params;
    let listing = await Listing.findById(id)
    .populate('owner')
    .populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    });


    if(!listing){
        req.flash("error","Listing you requested for does not exist")
        return res.redirect("/listings")
    }
    console.log(listing);
    res.render("listings/show.ejs",{listing})

}

module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, "..", filename);

  const { location } = req.body.listing;

  // 1️⃣ Get coordinates from location using geocode utility
  const coordinates = await geocode(location);

  // 2️⃣ Create new listing
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  // 3️⃣ If geocode worked, store geometry
  if (coordinates) {
    newListing.geometry = {
      type: "Point",
      coordinates: [coordinates.lon, coordinates.lat], // [longitude, latitude]
    };
  }
  console.log("Geocoded coordinates:", coordinates);

   

  await newListing.save();
  console.log("✅ Saved successfully with coordinates:", newListing);
  req.flash("success", "New listing created!");
  res.redirect(`/listings/${newListing._id}`);
};


module.exports.renderEditForm=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist")
        return res.redirect("/listings")
    }
    let originalImageUrl=listing.image.url;
    originalImageUrl=originalImageUrl.replace("/upload","/upload/ar_1.0,c_fill,w_250")
    res.render("listings/edit.ejs",{listing,originalImageUrl}) 
}    

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  // update main fields
  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true, runValidators: true }
  );

  // 🗺️ re-geocode if location changed
  if (req.body.listing.location) {
    const geoData = await geocode(req.body.listing.location);
    if (geoData) {
      listing.geometry = {
        type: "Point",
        coordinates: [geoData.lon, geoData.lat],
      };
    }
  }

  // 🖼️ update image if provided
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
  }

  await listing.save();

  req.flash("success", "Listing updated");
  res.redirect(`/listings/${id}`);
};




module.exports.destroyListing=async(req,res)=>{
     let {id}=req.params;
     let deletedListing=await Listing.findByIdAndDelete(id);
     console.log(deletedListing)
     req.flash("success"," Listing deleted!")
     res.redirect("/listings");
}
