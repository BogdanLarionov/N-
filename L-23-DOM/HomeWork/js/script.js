// В файле html в тэге body есть один элемент div с классом root.
// Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие данные: Артикул, наименование товара, цена. Данные взять произвольные.
// Применить стили к карточке: width, background-color, border, border-radius, padding, margin.

const rootElem = document.querySelector("#root");
console.log(rootElem);

const cardElem = document.createElement("div");
const articlElem = document.createElement("p");
const titulElme = document.createElement("p");
const priceElem = document.createElement("p");

articlElem.innerText = "Articl: 1234";
titulElme.innerText = `Title: iPhone 13 Pro`;
priceElem.innerText = "Price: $1300";

cardElem.innerHTML = "<p>Hello</p>"; //добавляет в дом парагроф

cardElem.classList.add("card");

rootElem.append(cardElem);
cardElem.append(articlElem, titulElme, priceElem);
