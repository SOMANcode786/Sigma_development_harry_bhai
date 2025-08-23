console.log("Counter app")



let countl=document.getElementById("counter")
let incbtn=document.getElementById("increase");
let decbtn=document.getElementById("descrease");
let rebtn=document.getElementById("reset");

let count=0;
incbtn.addEventListener("click",()=>{
count++;
countl.innerHTML=count;
});


decbtn.addEventListener("click",()=>{
    if(count>0){
        count--;
countl.innerHTML=count;
    }

});

rebtn.addEventListener("click",()=>{
count=0;
countl.innerHTML=count;
});