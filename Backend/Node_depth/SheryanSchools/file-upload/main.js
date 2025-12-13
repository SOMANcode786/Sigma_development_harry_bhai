const express = require('express');
const app = express();
require("dotenv").config();
const connectDb = require('./config/db');
const userRoute = require('./routes/upload');

connectDb();

// EJS template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/', userRoute);

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
