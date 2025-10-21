const mongosse=require('mongoose');

const userSchema=new mongosse.Schema({
   username:String,
    email:String,
    password:String

})

const userModel=mongosse.model('User',userSchema);


module.exports=userModel;