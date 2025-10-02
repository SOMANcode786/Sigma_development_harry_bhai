const express = require("express");
const router = express.Router();
const userModel = require("../models/userM");
const bcrypt = require("bcrypt"); // ✅ import bcrypt
const { body, validationResult } = require("express-validator");



// GET test route
router.get("/register", (req, res) => {
  console.log(req.query);
  res.render("index"); // Make sure you have views/index.ejs
});

// POST register route
router.post(
  "/register",
  // ✅ Validators
  body("email").isEmail().withMessage("Invalid email"),
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

      const { email, username, password } = req.body;

      // Hash password
      const hashPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await userModel.create({
        email,
        username,
        password: hashPassword, // ✅ fixed
      });

      return res.status(201).json({
        message: "User registered successfully ✅",
        user,
      });

    } catch (error) {
      console.error("❌ Error in /nn:", error.message);
      return res.status(500).json({
        message: "Server error while registering user",
        error: error.message,
      });
    }
  }
);




module.exports = router;
