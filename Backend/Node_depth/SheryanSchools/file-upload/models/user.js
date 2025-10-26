const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },   // file ka naam
  path: { type: String, required: true },       // file kaha store hui hai
  mimetype: { type: String },                   // file ka type (jpg, png, pdf, etc)
  size: { type: Number },                       // file size (bytes me)
  uploadDate: { type: Date, default: Date.now } // upload ka time
});

const FileModel = mongoose.model("File", fileSchema);

module.exports = FileModel;
