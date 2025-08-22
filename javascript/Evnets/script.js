let button = document.getElementById("btn");
let box = document.querySelector(".box"); // 👈 sirf first box

button.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
  box.style.color = "white";
  box.style.fontSize = "20px";
});
button.addEventListener("contextmenu", () => {
    alert("Right click is disabled on this button");
});