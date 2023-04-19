// // открывать в браузере!!!! по очеркдности

// fetch("https://jsonplaceholder.typicode.com/users") // отпровляем запрос ссылка
//   .then((response) => console.log(response)); // получаем response - ответ
// // получили ответ response
// // // ---------------------------------------------------
// // c JSON  -  преобразуем в array
// fetch("https://jsonplaceholder.typicode.com/users") // отпровляем запрос ссылка
//   // получили ответ response
//   .then((response) => response.json()) // получаем response - ответ, и вреобразовали в JSON
//   .then((json_data) => console.log(json_data)); // получили json, вывели данные в консоль

// // ---------------------------------------------------
// // c Text - преобразуем в текст данные
// fetch("https://jsonplaceholder.typicode.com/users") // отпровляем запрос ссылка
//   // получили ответ response
//   .then((response) => response.text()) // получаем response - ответ, и вреобразовали в JSON
//   .then((text_data) => console.log(text_data));

// ---------------------------------------------------
// fetch("https://jsonplaceholder.typicode.com/users/1") // отпровляем запрос ссылка
//   .then((response) => response.json())
//   .then((json_data) => console.log(json_data));

// fetch("https://jsonplaceholder.typicode.com/users/8") // отпровляем запрос ссылка
//   .then((response) => response.json())
//   .then((json_data) => console.log(json_data));

// ---------------------------------------------------

// открывать в браузере!!!! по очеркдности

// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json)); // получили обьект по данной ссылки

// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json.data)); // json.data - вытаскиваем нужные данные

// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json, json.per_page)); // json.data - вытаскиваем нужные данные

// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json), console.log(json.per_page);
//   }); // json.data - вытаскиваем нужные данные

// fetch("https://reqres.in/api/users?page=1")
//   .then((response) => response.json())
//   .then((json) => console.log(json.data[1].email));
// ---------------------------------------------------

// в html вешаем div с class="class_container"
// const classContainer = document.querySelector(".class_container");

// //  через массив

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json_data) => render(json_data));

// const render = (json_data) => {
//   const card = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const usernameElem = document.createElement("p");
//   const phoneElem = document.createElement("p");

//   nameElem.innerText = `Name: ${json_data[0].name}`;
//   usernameElem.innerText = json_data[0].username;
//   phoneElem.innerText = json_data[0].phone;

//   card.append(nameElem, usernameElem, phoneElem);
//   classContainer.append(card);
// };

// ---------------------------------------------------
// в html вешаем div с class="class_container"
const classContainer = document.querySelector(".class_container");

//  через объект

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((json_data) => render(json_data));

const render = (json_data) => {
  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const usernameElem = document.createElement("p");
  const phoneElem = document.createElement("p");

  nameElem.innerText = `Name: ${json_data.name}`;
  usernameElem.innerText = json_data.username;
  phoneElem.innerText = json_data.phone;

  card.append(nameElem, usernameElem, phoneElem);
  classContainer.append(card);
};
