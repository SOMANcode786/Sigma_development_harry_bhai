const express = require("express");
const router = express.Router();
const userModel = require("../models/userM");
const bcrypt = require("bcrypt"); // ✅ import bcrypt
const { body, validationResult } = require("express-validator");
const jwt=require('jsonwebtoken');

// GET test route
router.get("/login", (req, res) => {
  console.log(req.query);
  res.render("login"); // Make sure you have views/index.ejs
});

// POST register route
router.post(
  "/login",
  // ✅ Validators
  body("username").isLength({ min: 5 }).withMessage("Username must be at least 5 chars"),
  body("password").isLength({ min: 5 }).withMessage("Password must be at least 5 chars"),
  async (req, res) => {
    try {
      // Check validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Invalid data ❌",
        });
      }

      const {  username, password } = req.body;

     

      const user=await userModel.findOne({
        username:username
      })
     
      if(!user){
        return res.status(400).json({
            message:'username is incorrect '
        })
      }
      
      const isMatch=await bcrypt.compare(password,user.password)
      if(!isMatch){
        return res.status(400).json({
            message:"username or password is in correct"
        })
      }

      const token=jwt.sign({
        userID:user._id,
        email:user.email,
        username:user.username
      },
    process.env.JWT_SECRET
    
    )

    res.json({
        token,
        message:'✅ user login successfully'
    })


    } catch (error) {
      console.error("❌ Error in /nn:", error.message);
      return res.status(500).json({
        message: "Server error while login user",
        error: error.message,
      });
    }
  }
);




module.exports = router;