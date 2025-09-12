var bul = document.querySelector("#bulb");
var btn = document.querySelector("button");

let flag = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    bul.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    flag = 1;
  } else {
    bul.style.backgroundColor = "blue";
    btn.innerHTML = "ON";
    flag = 0;
  }
});
