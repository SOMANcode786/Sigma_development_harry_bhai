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
