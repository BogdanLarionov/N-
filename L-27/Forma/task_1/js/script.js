const formElem = document.querySelector(".form");

const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", (event) => {
formElem.addEventListener("submit", function (event) {
  event.preventDefault(); // запрещает обновлять страницу после отправки формы
  console.log("hello");
  console.log(event); // cсобытие
  console.log(event.target); // ссылка на элемент с которым происходит событие
  console.log(event.target.name); // ссылаемся на input с атрибутои name
  console.log(event.target.age); // ссылаемся на input с атрибутои age
  console.log(event.target.city); // ссылаемся на input с атрибутои city
  console.log(event.target.name.value); // выводим из input введенное данные value значение
  console.log(event.target.age.value); // выводим из input введенное данные value значение
  console.log(event.target.city.value); // выводим из input введенное данные value значение

  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const cityElem = document.createElement("p");

  card.classList.add("card");

  // Длиный способ 1
  //   nameElem.innerText = event.target.name.value;
  //   ageElem.innerText = event.target.age.value;
  //   cityElem.innerText = event.target.city.value;

  // Длиный способ 2
  //   nameElem.innerText = `Name: ${event.target.name.value}`;
  //   ageElem.innerText = `Age: ${event.target.age.value}`;
  //   cityElem.innerText = `City: ${event.target.city.value}`;

  // короткий способ 1
  // прописываем input по атрибуду name из  HTML
  const { name, age, city } = event.target;

  nameElem.innerText = `Name: ${name.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  cityElem.innerText = `City: ${city.value}`;

  card.append(nameElem, ageElem, cityElem);
  cardsContainer.append(card);

  //   длинный способ
  // очишение нужно делать в конце!
  // event.target.name.value = ""; // очистка после ввода input
  //   event.target.age.value = ""; // очистка после ввода input
  //   event.target.city.value = ""; // очистка после ввода input

  // короткий способ
  // очишение нужно делать в конце!
  name.value = ""; // очистка после ввода input
  age.value = ""; // очистка после ввода input
  city.value = ""; // очистка после ввода input
});
// // -------------------------------

// // function работает с this!!! так писади раньше
// const formElem = document.querySelector(".form");

// const cardsContainer = document.querySelector(".cards_container");

// formElem.addEventListener("submit", function (event) {
//   event.preventDefault(); // запрещает обновлять страницу после отправки формы
//   console.log("hello");
//   console.log(event); // cсобытие
//   console.log(event.target); // ссылка на элемент с которым происходит событие
//   console.log(event.target.name); // ссылаемся на input с атрибутои name
//   console.log(event.target.age); // ссылаемся на input с атрибутои age
//   console.log(event.target.city); // ссылаемся на input с атрибутои city
//   console.log(event.target.name.value); // выводим из input введенное данные value значение
//   console.log(event.target.age.value); // выводим из input введенное данные value значение
//   console.log(event.target.city.value); // выводим из input введенное данные value значение

//   const card = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const ageElem = document.createElement("p");
//   const cityElem = document.createElement("p");

//   card.classList.add("card");

//   // короткий способ 1
//   // прописываем input по атрибуду name из  HTML
//   const { name, age, city } = this;

//   nameElem.innerText = `Name: ${name.value}`;
//   ageElem.innerText = `Age: ${age.value}`;
//   cityElem.innerText = `City: ${city.value}`;

//   card.append(nameElem, ageElem, cityElem);
//   cardsContainer.append(card);

//   // короткий способ
//   // очишение нужно делать в конце!
//   name.value = ""; // очистка после ввода input
//   age.value = ""; // очистка после ввода input
//   city.value = ""; // очистка после ввода input
// });
