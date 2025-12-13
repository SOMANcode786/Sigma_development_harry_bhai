<<<<<<< HEAD
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
=======
const express=require('express')
const app=express()
require("dotenv").config();

const userRouter=require("./routes/user")
const dbconnection=require('./config/db')
const morgan = require('morgan')


app.set("view engine",'ejs')
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/user",userRouter)

var port;   
app.listen(port=3000,()=>{
    console.log(`localhost: ${port}`)
})
>>>>>>> 3e16b462f5cb6ec1f7343c590f4e6597c6f33398
