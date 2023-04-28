// написать функцию, которая получает в качестве аргумента обьект с данными пользователя
//  и добовляет карточку с name и username  в #root

/* добавить  для карточек пользователя email (в виде ссылки) */

// добавить форму, форма долдна иметь одно поле ввода и кнопку отправить.
// при отправке (события submit) выводить содержимое поле ввода в консоль

const rootElem = document.querySelector("#root");
const addForm = document.querySelector("#add_form");

// function adUser(elem) {
function addUser({ name, username, email, website }) {
  const card = document.createElement("div");
  card.classList.add("item");
  const nameElem = document.createElement("p");
  //   nameElem.innerText = elem.name;
  nameElem.innerText = name + " " + username;

  const emailElem = document.createElement("a");
  emailElem.innerText = email;
  emailElem.href = `mailto:${email}`;
  emailElem.classList.add("email");

  const websiteElem = document.createElement("p");
  websiteElem.innerText = website;

  card.append(nameElem, emailElem, websiteElem);
  rootElem.append(card);
}

function showUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

// showUser(3, addUser);

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target.id.value);
  const id = event.target.id.value;
  event.target.id.value = "";

  showUser(id, addUser);
});
