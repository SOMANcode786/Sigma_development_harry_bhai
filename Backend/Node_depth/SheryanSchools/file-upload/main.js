const express=require('express')
const app=express()
require("dotenv").config();
const connectDb=require('./config/db')
const userModel=require('./models/user')
const userRoute=require('./routes/upload')
connectDb()

app.set('view engine','ejs')
app.use(express.json('dev'))
app.use( express.urlencoded({extended:true}))

app.use('/',userRoute)

app.listen(3000,()=>{
    console.log("localhost:3000")
})