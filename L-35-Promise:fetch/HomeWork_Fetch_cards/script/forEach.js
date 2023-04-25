fetch("https://jsonplaceholder.typicode.com/todos");
const rootElem = document.querySelector("#root");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    json.forEach(({ title, completed }) => {
      const cardElem = document.createElement("div");
      cardElem.style.backgroundColor = completed ? "#0be881" : "#808e9b";
      cardElem.classList.add("cards");

      const tittleElem = document.createElement("p");
      tittleElem.innerText = `Task: ${title}`;

      const completedElem = document.createElement("p");
      completedElem.innerText = `Status: ${completed ? "done" : "not done"}`;

      cardElem.append(tittleElem, completedElem);
      rootElem.append(cardElem);
    });
  });
