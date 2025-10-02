const express = require("express");
const router = express.Router();
const userModel = require("../models/userM");
const { body, validationResult } = require("express-validator");

// GET test route
router.get("/test", (req, res) => {
  console.log(req.query);
  res.render("index"); // Make sure you have views/index.ejs
});

// POST register route
router.post(
  "/register",
  body("email").trim().isEmail().withMessage("Valid email required"),
  body("password").trim().isLength({ min: 5 }).withMessage("Password must be at least 5 chars"),
  body("username").trim().isLength({ min: 8 }).withMessage("Username must be at least 8 chars"),

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

      // Create user
      const user = await userModel.create({ email, username, password });

      res.status(201).json({
        message: "User registered successfully ✅",
        user,
      });

    } catch (error) {
      console.error("❌ Error in /register:", error.message);
      res.status(500).json({
        message: "Server error while registering user",
        error: error.message,
      });
    }
  }
);

module.exports = router;
