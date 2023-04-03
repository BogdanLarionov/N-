// addEventListener()

//Справочник по событиям -  https://developer.mozilla.org/ru/docs/Web/Events

const square = document.querySelector(".square");
const container = document.querySelector(".container");

square.addEventListener("click", () => {
  container.innerText = "red square";
  container.style.color = "blue";
  document.body.style.backgroundColor = "green";
});
// -----------------------------------------------------------
const btnElem = document.querySelector(".btn");

const cont = document.querySelector("#cont");

btnElem.addEventListener("click", () => {
  const text = document.createElement("p");
  text.innerText = "Hello";
  text.classList.add("text");
  text.style.color = "yellow";
  cont.append(text);
});
