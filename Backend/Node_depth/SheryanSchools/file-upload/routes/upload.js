const express=require('express')
const app=express()
const router = express.Router();



router.get('/file',(req,res)=>{
    console.log(req.querry)
    res.render("index")
})



module.exports=router