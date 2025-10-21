// server.js
const express = require("express");
const app = express();
// CORRECT IMPORT: The connection object is named 'connection'
const connection = require("./connection.js");

const PORT = 3000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware for parsing request bodies (for POST forms or JSON data)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Routes ---

// 1. Route to display the data request form
app.get("/", (req, res) => {
  // Renders the index.ejs file
  res.render("index", { userData: null, error: null });
});

// 2. Route to handle the form submission and fetch data
app.get("/user", (req, res) => {
  // Get the ID from the query parameters (req.query)
  const userId = req.query.id;

  if (!userId) {
    return res.render("index", {
      userData: null,
      error: "Please enter a user ID.",
    });
  }

  // Use parameterized query (?) to prevent SQL Injection
  const sql = "SELECT id, name, email FROM users WHERE id = ?";

  // 🐛 FIX APPLIED HERE: Using the correct variable name 'connection'
  connection.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Database query error: " + err.message);
      return res.render("index", {
        userData: null,
        error: "Database error occurred.",
      });
    }

    if (results.length === 0) {
      // No user found with that ID
      return res.render("index", {
        userData: null,
        error: `No user found with ID: ${userId}`,
      });
    }

    // User found - send the first result to the template
    res.render("index", {
      userData: results[0],
      error: null,
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
