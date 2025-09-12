const fs=require("fs");


fs.writeFile("soman.txt","soman is a good boy",(error)=>{
    if(!error){
      console.log("file written successfully");
    }
    else{
      console.log(error);
    }
})





// aslo in this append method for add more data in the file without cahnging the existing data

fs.appendFile("soman.txt"," and he is also a good cricketer",(error)=>{
    if(!error){
        console.log("file append successfully");
      }     
        else{
        console.log(error);
        }
})


