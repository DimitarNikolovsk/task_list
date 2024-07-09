let btn = document.getElementById("addTaskBtn");
let inputTask = document.getElementById("newTask");
let taskList = document.getElementById("taskList");

function onClickCreateTask() {
  if (inputTask.value != "") {
    let listElement = document.createElement("li");
    let spanElement = document.createElement("span");
    listElement.appendChild(spanElement);
    spanElement.textContent = inputTask.value;
    //
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.addEventListener("click", onClickComplete);
    //
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", onClickDelete);

    listElement.appendChild(completeBtn);
    listElement.appendChild(deleteBtn);
    taskList.appendChild(listElement);

    inputTask.value = "";
  } else {
    let errorMassage = document.getElementById("errorMassage");
    errorMassage.textContent = "Enter your Task";
  }
}

btn.addEventListener("click", onClickCreateTask);

function onClickComplete(event) {
  let listElement = event.target.parentElement;

  // if (listElement.classList.contains("completed")) {
  //   listElement.classList.remove("completed");
  // } else {
  //   listElement.classList.add("completed");
  // }
  listElement.classList.toggle("completed");
}

function onClickDelete(event) {
  let listElement = event.target.parentElement;
  let taskList = listElement.parentElement;
  taskList.removeChild(listElement);
}