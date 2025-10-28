const User=require("../models/user.js");
module.exports.renderLoginForm=(req,res)=>{
    res.render("users/login.ejs")
}


module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err); 
        }
        req.flash("success","You are logged out");
       
        res.redirect("/listings")
    })
}

module.exports.renderSignUpForm=(req,res)=>{
    res.render("users/signup.ejs")
}




module.exports.signUp=async(req,res)=>{
    try{
    let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser=await User.register(newUser,password)
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err){
           return next(err)
        }
        req.flash("success","Welcome to Zyra");
        res.redirect("/listings");
    }) 

    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}


module.exports.login=  async (req, res) => {
    req.flash("success", "Welcome back to Zyra!");
    console.log("Redirect URL:", res.locals.redirectUrl);
    console.log("Session Redirect URL:", req.session.redirectUrl);

    const redirectUrl = res.locals.redirectUrl || "/listings"; // 👈 fallback added
    delete req.session.redirectUrl; // optional cleanup
    res.redirect(redirectUrl);
  }