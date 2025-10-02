const express=require('express')
const app=express()
const dbconnection=require('./config/db')
const userModel=require('./models/user')
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    console.log("Server get started")
    res.render("index")
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    res.send("data recevied")
})



 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
 