const express=require("express");
const router=express.Router();

const wrapasync = require("../utils/wrapasync.js");
const passport=require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middleware.js");

const userController=require("../controllers/users.js");

router
 .route("/signup")
 .get(userController.renderSignUpForm)
 .post(wrapasync(userController.signUp));


router
.route("/login")
.get(userController.renderLoginForm)
.post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
   userController.login
);


router.get("/logout",userController.logout)

module.exports=router; 