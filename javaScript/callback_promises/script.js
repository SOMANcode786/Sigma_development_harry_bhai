
console.log("Hi i  am learining callbacks and promises")

// callback function as an funtion which is pass  to another function to argument


// setTimeout(()=>{
//     console.log("hi i am a set time out function");
// },0);


// console.log("hi ")

// setTimeout(()=>{
//     console.log(" set time out function");
// },3);


const callback=(arg)=>{
    console.log(arg)
}
const loadScript=(src,callback)=>{
    let sc=document.createElement("script")     
    sc.src=src;
    sc.onload=callback("soman");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)