const express = require("express");
const app = express();
const userRouter = require("./routes/user");

// Set the view engine
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
