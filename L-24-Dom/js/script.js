const data = [
  {
    id: 1,
    name: "Анатолий",
    email: "anatoliy@mail.ru",
    avatar: "./media/face.jpeg",
  },
  {
    id: 2,
    name: "Максим",
    email: "maxim@mail.ru",
    avatar: "./media/face.jpeg",
  },
  {
    id: 3,
    name: "Антон",
    email: "Anton@mail.ru",
    avatar: "./media/face.jpeg",
  },
  {
    id: 4,
    name: "Олег",
    email: "oleg@mail.ru",
    avatar: "./media/face.jpeg",
  },
];

//  второй способ!

const rootElem = document.querySelector("#root");

function getCard(name, email, avatar) {
  const cardElem = document.createElement("div");
  //   const idElem = document.createElement("p");
  const nameElem = document.createElement("p");
  const emailElem = document.createElement("a");
  const avatarElem = document.createElement("img");

  //   idElem.innerText = id;
  nameElem.innerText = name;
  emailElem.innerText = email;

  avatarElem.src = avatar;
  avatarElem.alt = "img";

  emailElem.href = "mailto:" + email;

  cardElem.classList.add("card");
  cardElem.append(avatarElem, nameElem, emailElem);
  return cardElem;
}

data.forEach((user) => {
  const cardElem = getCard(user.name, user.email, user.avatar);
  rootElem.append(cardElem);
});

// ----------------------------------
//  первый способ!
// const data = [
//   {
//     id: 1,
//     name: "Анатолий",
//     email: "anatoliy@mail.ru",
//     avatar: "./media/face.jpeg",
//   },
//   {
//     id: 2,
//     name: "Максим",
//     email: "maxim@mail.ru",
//     avatar: "./media/face.jpeg",
//   },
//   {
//     id: 3,
//     name: "Антон",
//     email: "Anton@mail.ru",
//     avatar: "./media/face.jpeg",
//   },
//   {
//     id: 4,
//     name: "Олег",
//     email: "oleg@mail.ru",
//     avatar: "./media/face.jpeg",
//   },
// ];
// const rootElem = document.querySelector("#root");

// data.forEach((user) => {
//   // проходимся циклом forEach по массиву
//   // data.forEach(({ id, name, email, avatar }) => { // диструкторизация
//   const cardElem = document.createElement("div");
//   const idElem = document.createElement("p");
//   const nameElem = document.createElement("p");
//   const emailElem = document.createElement("a");
//   const avatarElem = document.createElement("img");

//   //   idElem.innerText = id; // диструкторизация
//   //   nameElem.innerText = name; // диструкторизация
//   //   emailElem.innerText = email; // диструкторизация
//   idElem.innerText = user.id;
//   nameElem.innerText = user.name;
//   emailElem.innerText = user.email;

//   avatarElem.src = user.avatar;
//   avatarElem.alt = "img";

//   //   avatarElem.setAttribute("src", user.avatar);
//   // avatarElem.setAttribute("alt", "img");

//   // добавить почту (тег а) в котором внутри будет указана почта и в качестве атрибута href
//   //   emailElem.href = "mailto:user.email";
//   emailElem.href = "mailto:" + user.email;
//   //   emailElem.setAttribute("href", "mailto:user.email");

//   // 1. добавить класс card элемента card и для фото
//   cardElem.classList.add("card");
//   avatarElem.classList.add("img");

//   cardElem.append(avatarElem, idElem, nameElem, emailElem);
//   rootElem.append(cardElem);
// });
