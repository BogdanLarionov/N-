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

// заменить fb на facebook
const fb_elem = document.querySelector(".media .fb a");
fb_elem.innerText = "facebook"; // facebook
// -----------------------------
// при нажатии на звежлчу меняется на point 1 ...
const point_one = document.querySelector(".point_1");
point_one.addEventListener("click", () => {
  point_one.innerText = "point 1";
});

const point_twoo = document.querySelector(".point_2");
point_twoo.addEventListener("click", () => {
  point_twoo.innerText = "point 2";
});

const point_three = document.querySelector(".point_3");
point_three.addEventListener("click", () => {
  point_three.innerText = "point 3";
});

// -----------------------------
const Hello_elem = document.querySelector(".div-main");

Hello_elem.addEventListener("click", () => {
  Hello_elem.style.color = "red";
  Hello_elem.style.backgroundColor = "black";
  Hello_elem.style.padding = "20px";
});
// -----------------------------
// используя Math.round() и Math.random обьявите функцию, которая возвращает случайное число от 0 до 255
// 1
const randomNum = Math.round(Math.random() * 255);
console.log(randomNum);
// 2
function random() {
  return Math.round(Math.random() * 255);
}
console.log(random());
// 3
const randomNum3 = Math.round((Math.random() * 255) | 0);
console.log(randomNum3);

// реализовать функцию random_color, которая возвращает случайный цвет в формате rgb

const random_color_q = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb (${r} ${g} ${b})`;
};

// -----------------------------
const random_Hello = document.querySelector(".main-div");
const random_color = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

random_Hello.addEventListener("click", () => {
  random_Hello.style.color = random_color();
  random_Hello.style.backgroundColor = random_color();
  random_Hello.style.padding = "20px";
});
// -----------------------------
// считываем изменненные значения в html
const readElem = document.querySelector(".read");
const text = readElem.innerText;
console.log(text); // Reading

//  реализуем счетчик
const chengeNumb = document.querySelector(".numb");
chengeNumb.addEventListener("click", () => {
  const value = chengeNumb.innerText;
  chengeNumb.innerText = +value + 1; // Reading
});
const value = chengeNumb.innerText;
console.log(+value + 1); // Reading
