// // https://reqres.in/
// fetch("https://reqres.in/api/users/1").then(
//   (response) => console.log(response), // if all is ok, true
//   (reject) => console.log(reject) // if all is not ok, false
// )
// ---------------------------------------------------------------------

// написать функцию, которая получает в качестве аргумента объект с данными пользователя и возвращает div с картинкой, именем и почтой пользователя

// https://reqres.in/
// fetch("https://reqres.in/api/users/2")
//   .then(
//     (response) => response.json(), // if all is ok, true
//     (reject) => console.log(reject) // if all is not ok, false
//   )
//   .then(
//     (response) => addUser(response),
//     (reject) => console.log(reject)
//   );

// const user = {
//   data: {
//     avatar: "https://reqres.in/img/faces/1-image.jpg",
//     email: "george.bluth@reqres.in",
//     first_name: "George",
//   },
// };

const rootElem = document.querySelector("#root");

function addUser(user) {
  const container = document.createElement("div");

  const imgElem = document.createElement("img");
  imgElem.src = user.data.avatar;

  const linkElem = document.createElement("a");
  linkElem.href = `mailto: ${user.data.email}`;
  linkElem.innerText = user.data.email;

  const nameElem = document.createElement("p");
  nameElem.innerText = user.data.first_name;

  container.append(imgElem, linkElem, nameElem);

  // return container;
  rootElem.append(container);
}

// rootElem.append(addUser(user));

function getUser(user_id) {
  fetch(`https://reqres.in/api/users/${user_id}`)
    .then(
      (response) => response.json(), // if all is ok, true
      (reject) => console.log(reject) // if all is not ok, false
    )
    .then(
      (response) => addUser(response),
      (reject) => console.log(reject)
    );
}
