// DOM - Document Object Model

// находим элемент в html документе для обращения к элементу
const header = document.querySelector(".header");
const paragraph = document.querySelector("#par");
const h3 = document.querySelector("h3");

// const h3 = document.getElementById("h3"); - старый способ
// const h3 = document.getElementsByClassName("#h3"); - старый способ

// вызвывем в консоль
console.log(header);
console.log(paragraph);
console.log(h3);

// меняем стиль
header.style.color = "red";
paragraph.style.backgroundColor = "green";

// добавим класс
header.classList.add("class_added");

// удалили класс
header.classList.remove("class_deleted");
// -------------------------------------------
// находим элемент в html документе для обращения к элементу
const container = document.querySelector(".container");

// создать новый элемент
const text = document.createElement("p");

//добавляю p внутрь container как метод push()
container.append(text);

// добовдяем текст в p
text.innerText = "Какой-то текст";
// -------------------------------------------
// создать новый элемент
const divElem = document.createElement("div");
// добовдяем текст в div
divElem.innerText = "Текст внутри нового div";
//добавляю p внутрь container как метод push()
container.append(divElem);
