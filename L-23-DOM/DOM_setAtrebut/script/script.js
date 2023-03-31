const rootElem = document.querySelector(".root");

const card = document.createElement("div");

const idElem = document.createElement("p");
const firstnameElem = document.createElement("p");
const lastnameElem = document.createElement("p");
const ageElem = document.createElement("p");
const salaryElem = document.createElement("p");
const emailElem = document.createElement("a"); // a - строчный элемент
const emailTextElem = document.createElement("p"); // p - пораграф блочный элемент занимает все ширину или заменить тег на <span> он строчный  элемент
const imgElem = document.createElement("img");

firstnameElem.innerText = "First name: Олга";
lastnameElem.innerText = "Last name: Петрова";
emailElem.innerText = `exampl@gmail.com`;
idElem.innerText = `ID: 1`;
ageElem.innerText = `Age: 18`;
salaryElem.innerText = `Salary: 1500`;

//добавляем класс элементу card
card.classList.add("card");
emailTextElem.classList.add("emailText");
imgElem.classList.add("photo");

//добавили photo
imgElem.src = "https://reqres.in/img/faces/12-image.jpg"; // добавляем атрибут src к imgElem
imgElem.alt = "Photo"; // добавляем атрибут alt к imgElem
emailElem.href = "mailto:exampl@gmail.com";
emailTextElem.innerText = "Email:";

//добавили photo через setAttribute аторой пособ
// Короткий способ добавления атрибутов к img
// imgElem.setAttribute("src", "https://reqres.in/img/faces/12-image.jpg");  // добавляем атрибут src к imgElem
// imgElem.setAttribute("alt", "Photo"); // добавляем атрибут alt к imgElem
// emailElem.setAttribute("href", "mailto:exampl@gmail.com");

card.append(
  idElem,
  firstnameElem,
  lastnameElem,
  ageElem,
  salaryElem,
  imgElem,
  emailTextElem,
  emailElem
);
rootElem.append(card);

// https://validator.w3.org/ валидатор кода
