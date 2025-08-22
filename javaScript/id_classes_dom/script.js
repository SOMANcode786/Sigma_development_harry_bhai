console.log("this is the practice course")



// let name=document.getElementsByClassName("box")
// console.log("this is the box :" ,name)

// name[2].style.backgroundColor="red"

// document.querySelector(".box").style.backgroundColor="green"



let all=document.querySelectorAll(".box");
console.log("-->",all)


// all.forEach((box,i)=>{
//   box.addEventListener("click", () => {
//     box.style.backgroundColor = "green";
//     box.innerText = "Clicked " + (i + 1);
//   });
// });

all[2].addEventListener("dblclick",()=>{
    all[2].style.backgroundColor="green";
    all[2].innerHTML="soman";
})