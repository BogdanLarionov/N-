// https://jsonplaceholder.typicode.com/todos

// Внутри функции оброщаться к переменной плохая практика !!!
const taskContainer = document.querySelector("#tasks_container");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => render(json));

// Внутри функции оброщаться к переменной плохая практика !!!
const render = (json) => {
  const tasks = json.map(({ title, completed }) => {
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
    return task;
  });
  taskContainer.append(...tasks);
};
