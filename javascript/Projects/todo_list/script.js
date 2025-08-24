let inp = document.getElementById(".inp");
let btn = document.getElementById(".btn");
let task = document.getElementById(".tasklist");

btn.addEventListener("click", () => {
  let tasktext = inp.value.trim();

  if (tasktext == "") {
    alert("please Enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = tasktext;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("deleteBtn");

  deleteBtn.addEventListener("click", () => {
    task.removeChild(li);
  });
  li.appendChild(deleteBtn);
  task.value = "";
});
