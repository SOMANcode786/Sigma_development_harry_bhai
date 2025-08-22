console.log('DOM 01 - Into');


// document.querySelectorAll(".box")

// console.log(document.querySelectorAll(".box"));


// itrate through all elemt through the foreach and select all box through querySelectorAll

// document.querySelectorAll(".box").forEach((el,index) => {
//     if(index%2 ==0){
//         el.style.backgroundColor = "red";
//     }
//     else{
//         el.style.backgroundColor = "pink";
//     }
// });


// Css selector matches

// let e=document.querySelector(".container");
// console.log(e)


// e.querySelectorAll(".box:nth-child(odd)").forEach((el)=>{
//     el.style.backgroundColor = "red";
// });


let select=document.getElementsByTagName("span");

select.innerText="what is your name ?";
console.log(select);