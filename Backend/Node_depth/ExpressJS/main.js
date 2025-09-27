const express = require("express");
const app = express();
const port = 3000;
const host = 'localhost';
const blog=require("./routes/blog");



app.use("/blog",blog)
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});
app.get("/about", (req, res) => {
  res.send("Hello About Page !");
});
app.get("/blog/:slug", (req, res) => {
  console.log(req.params);
  console.log(req.query)
  res.send(`Hello Blog Page ! ${req.params.slug}`);
});


app.get("/index",(req,res)=>{
  console.log('This is middleware');
  res.sendFile('/templates/index.html',{root:__dirname},(err)=>{
    if(err){
      console.log("Found a error",err.message)
      res.status(404).send("Not found");
    }
    else{
      console.log("Sent Successfully");
    }
  });
  
})

app.listen(port,host,() => {
  console.log(`Example app listening on  ${port}`);
});
