const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapasync.js");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");

const listingController=require("../controllers/listings.js")
const multer  = require('multer')
const {storage}=require("../cloudconfig.js")
const upload = multer({ storage})
const geocode = require("../utils/geocode");


//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm)

router
.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,
    upload.single('listing[image]'),
    validateListing,
    wrapAsync(listingController.createListing))

//Category Route

router.get(
  "/category/:category",
  wrapAsync(listingController.categoryFilter)
);


    
router
.route("/:id")
.get(listingController.showListing)
.put(isLoggedIn,isOwner, upload.single('listing[image]'),validateListing,isLoggedIn, wrapAsync(listingController.updateListing ))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

       

//Show Route 




//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))





// AI Travel Tips Route

const getTravelTips = require("../utils/aiTips.js");

router.get("/:id/ai-tips", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    const tips = await getTravelTips(listing.location, listing.country);
    res.json({ tips });
}));

module.exports=router;