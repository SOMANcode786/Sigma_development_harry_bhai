
    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {

        let userinput=input.value.trim()
        console.log("user na ya likha ha :" ,userinput);
      // agar input empty na ho
      


      if (userinput !== "") {
        // new li create karo
        let li = document.createElement("li");
        li.innerText = userinput;
        li.style.listStyle="none";

        // delete button banao
        let delBtn = document.createElement("button");
        delBtn.innerText = "❌";
        delBtn.style.marginLeft = "10px";

        // delete button pe event
        delBtn.addEventListener("click", function () {
          li.remove();
        });

        // li ke sath button add karo
        li.appendChild(delBtn);

        // task list me add karo
        taskList.appendChild(li);

        // input clear karo
        input.value = "";
      }
    });
  