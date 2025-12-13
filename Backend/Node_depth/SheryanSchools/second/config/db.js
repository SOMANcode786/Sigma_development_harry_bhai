const mongoose=require('mongoose')

const connection=mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Db connect")
})

module.exports=connection