const mongoose=require('mongoose')
const {body}=require('express-validator')

const userSchema=new mongoose.Schema({
       username:{
              type:String,
              required:true,
              lowercase:true,
              unique:true,
              minlength:[3,'username must be at least 3 chrachter long']
       },
       password:{
              type:String,
              trim:true,
              minlength:[5,'password must be 5 charcater long']
       },
       email:{
              type:String,
              required:true,
              lowercase:true,
              unique:true,
              minlength:[13,'Email must be at least 13 chrachter long']
       }
})

const userModel=mongoose.model('New',userSchema)

module.exports=userModel