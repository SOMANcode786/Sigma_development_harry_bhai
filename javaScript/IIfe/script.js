async function sleep(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
            resolve(45)
    },1000)
 });
};

console.log("hi i am learing IIFE (Imediately invoke function expression)")

// async function main(){
// let a=await sleep();
// console.log(a);


// }

// main();
// Imediately invoke function expression
(async ()=>{
    let a=await sleep()
    console.log(a);
})();