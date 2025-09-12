const { error } = require("console");
const fs = require("fs")

console.log(fs);

console.log('Starting..');

// synchornus
// fs.writeFileSync("soman.txt", "soman is a good boy");
// console.log("File written successfully!");
 
// asynchornus
fs.writeFile("so.txt","soman is Good boy",()=>{
    console.log('done');
    fs.readFile("so.txt",(error,data)=>{
        console.log(error,data.toString());
        
    })
    
})


console.log('file write sucessfully');
