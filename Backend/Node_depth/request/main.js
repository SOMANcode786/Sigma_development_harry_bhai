const express = require('express');
const app = express();
const port = 3000;
const host = 'localhost';
const blog=require("./routes/blog");

app.use("/blog",blog);      

app.use(express.static("public"));
app.get('/', (req, res) => {
    console.log('Helllow World');
    
    res.send('Hello World !');
});
app.post('/', (req, res) => {
    console.log('Helllow World post');
    
    res.send('Hello World  post !');
});


app.get("/index", (req, res) => {
  console.log("Helllow World");

  res.sendFile("templates/myindex.html", { root: __dirname });
});


app.listen(port, host, () => {
    console.log(`Example app listening on  localhost:${port}`);
});
