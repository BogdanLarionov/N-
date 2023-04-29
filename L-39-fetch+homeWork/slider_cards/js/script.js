// https://jsonplaceholder.typicode.com/todos

// Внутри функции оброщаться к переменной плохая практика !!!
const taskContainer = document.querySelector("#tasks_container");

let id_num = 1;

const request = (num) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
    .then((response) => response.json())
    .then((json) => render(json));
};

// Внутри функции оброщаться к переменной плохая практика !!!
const render = ({ title, completed }) => {
  taskContainer.innerText = "";
  const task = document.createElement("div");
  task.classList.add("task_card");

  const taskTitle = document.createElement("p");
  taskTitle.innerText = `Task: ${title}`;

  const status = completed ? "done" : "not done";
  const backgraund = completed ? "lightgreen" : "lightgray";
  task.style.backgroundColor = backgraund;

  const taskStatus = document.createElement("p");
  taskStatus.innerText = `Status: ${status}`;
  // taskStatus.innerText += completed ? "done" : "not done";

  task.append(taskTitle, taskStatus);
  taskContainer.append(task);
};

const [left_btn, right_btn] = document.querySelectorAll(".trigers button");

left_btn.addEventListener("click", () => {
  if (id_num === 1) {
    id_num = 201;
  }
  request(--id_num);
});

right_btn.addEventListener("click", () => {
  if (id_num === 200) {
    id_num = 0;
  }
  request(++id_num);
});

request(id_num);
