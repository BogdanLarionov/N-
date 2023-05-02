// https://dummyjson.com/
// https://codebeautify.org/jsonviewer?__cf_chl_tk=yF4R7eBbl9CyWFRMC_O0crAUdCPG73_lNDMxrgVfbcc-1682806944-0-gaNycGzNEzs
// https://jsonplaceholder.typicode.com/
// https://jsonplaceholder.typicode.com/todos
// https://github.com/BogdanLarionov/N-/tree/main/L-39-fetch%2BhomeWork

// https://dummyjson.com/users

// Имя фамилия, возраст, пол. В зависимости от пола цвет заднего фона

const userForm = document.querySelector(".user_form");
const usersContainer = document.querySelector(".users_container");

const request = (num) => {
  fetch(`https://dummyjson.com/users/${num}`)
    .then((resp) => resp.json())
    .then((json) => render(json));
};

const render = ({ firstName, lastName, age, gender }) => {
  usersContainer.innerText = "";
  const userCard = document.createElement("div");
  const nameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const genderElem = document.createElement("p");

  nameElem.innerText = `Name: ${firstName} ${lastName}`;
  ageElem.innerText = `Age: ${age}`;
  genderElem.innerText = `Gender: ${gender}`;

  const card_background = gender === "male" ? "lightgreen" : "lightpink";
  userCard.style.backgroundColor = card_background;
  userCard.classList.add("user_card");

  userCard.append(nameElem, ageElem, genderElem);
  usersContainer.append(userCard);
};

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = event.target.id_number.value;
  request(id);

  event.target.id_number.value = "";
});
