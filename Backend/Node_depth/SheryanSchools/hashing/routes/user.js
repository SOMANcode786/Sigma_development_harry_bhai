const express = require("express");
const router = express.Router();
const userModel = require("../models/userSc");
const dbconnection = require("../config/db");

router.get("/", (req, res) => {
  console.log("user route");
  res.render("index"); // Ye index.ejs ko render karega
});

router.post("/user-data", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = await userModel.create({
      username:username,
      email:email,
      password:password,
    });

    console.log("✅ User data saved to database:", newUser);
    res.status(201).json(newUser); // JSON format me response bhejo
  } catch (err) {
    console.error("❌ Error saving user data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
