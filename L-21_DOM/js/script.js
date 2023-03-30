console.log(document);
// querySelector - метод возврощающий элемент по селектору
const main_p = document.querySelector(".main");
console.log(main_p);

// найти все пораграфи
// querySelectorAll - метод возврощающий итерируемый объект (NodeList) по селектору
const p_list = document.querySelectorAll("p");
console.log(p_list);

// getElementsByClassName - метод возврощающий итерируемый объект (HTMLCollection) по селектору
const container = document.getElementsByClassName("container")[0];
console.log(container);
// -----------------------------

// Длинное обращение (устаревший способ )итерированный обьект
const prod_p = document
  .getElementsByClassName("products")[0]
  .getElementsByTagName("p")[0];

console.log(prod_p);
// -----------------------------
const contacts_p = document.querySelector(".contacts p");
console.log(contacts_p);
// поменяли текст
contacts_p.innerText = "Абоненты";

// обработка событий
// addEventListener позволяет повесить событие (в данном случае click) на параграф contacts_p и при этом событии выполнится callback функция
contacts_p.addEventListener("click", () => {
  contacts_p.innerText = "Контакты";
});
// -----------------------------
// https://developer.mozilla.org/en-US/docs/Web/Events

// https://developer.mozilla.org/ru/docs/Web/Events

const meinText = document.querySelector(".mein p");
meinText.innerText = "Не такой уж важный текст";
