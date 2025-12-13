<<<<<<< HEAD
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas Connected!"))
  .catch((err) => console.error("❌ Connection Error:", err));
=======
const mongoose=require('mongoose')


const connection=mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(" 🪶 Mongo Db connect")
})


module.exports=connection
>>>>>>> 3e16b462f5cb6ec1f7343c590f4e6597c6f33398
