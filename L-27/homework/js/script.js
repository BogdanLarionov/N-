// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)
const btn = document.querySelector("button");
const divElem = document.querySelector(".root");

btn.addEventListener("click", () => {
  const pElem = document.createElement("p");

  pElem.innerText = "текст взять произвольный";
  pElem.style.color = "green";

  divElem.append(pElem);
});

// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.

const containerElem = document.querySelector(".container");
const btn_2 = document.querySelector(".btn_2");

btn_2.addEventListener("click", () => {
  const square = document.createElement("div");
  square.classList.add("square");

  //   square.style.width = "300px";
  //   square.style.height = "300px";
  //   square.style.backgroundColor = "yellow";

  containerElem.append(square);
});
