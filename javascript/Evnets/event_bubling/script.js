
let main = document.querySelector(".container");
let childadj = document.querySelector(".childContainer");
let child=document.querySelector(".child");
main.addEventListener("click", () => {
  alert("Right click is disabled on this button");
});
childadj.addEventListener("click", () => {
  alert("Right click is disabled on this button");
});
child.addEventListener("click", () => {
  alert("child clicked");
});
