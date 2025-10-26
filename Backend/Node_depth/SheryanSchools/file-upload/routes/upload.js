const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const FileModel = require("../models/user");


// Setup multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // folder to save files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // unique name
    }
});
const upload = multer({ storage });

// Render upload form
router.get('/file', (req, res) => {
    console.log(req.query);
    res.render("index"); // make sure views/index.ejs exists
});

// Handle file upload
router.post('/upload-file', upload.single("file"), async (req, res) => {
  console.log("Body:", req.body);
  console.log("File:", req.file);

  if (!req.file) {
    return res.status(400).send("❌ No file uploaded.");
  }

  const newFile = new FileModel({
    filename: req.file.filename,
    path: req.file.path,
    mimetype: req.file.mimetype,
    size: req.file.size
  });

  await newFile.save();

  res.send("✅ File uploaded and saved in MongoDB: " + req.file.filename);
});




module.exports = router;
