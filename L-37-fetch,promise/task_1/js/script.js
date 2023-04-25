// https://codebeautify.org/jsonviewer
// http://htmlbook.ru/html/img - setAttribute , or .

// Если успешно response , не успешно reject

const cardsContainer = document.querySelector(".cards_container");

fetch("https://reqres.in/api/users/") // отправляем запрос
  .then((response) => response.json()) // получаем ответ, преобразовывоем в json
  // .then((json) => console.log(json.data)); // получаем json, что-то делает с json
  .then((json) => render(json.data)); // получаем json, что-то делает с json

const render = (data_array) => {
  //json.data => data_array - это аргумент (переменная, может быть любое название)
  data_array.forEach((elem) => {
    const card = document.createElement("div");
    card.classList.add("card_css");
    const avatarElem = document.createElement("img");
    avatarElem.src = elem.avatar; // короткая запись
    avatarElem.alt = `photo`; // короткая запись

    // avatarElem.setAttribute("src", elem.avatar); // длинная запись
    // avatarElem.setAttribute("alt", "photo"); // длинная запись

    const firstnameElem = document.createElement("p");
    firstnameElem.innerText = `name: ${elem.first_name}`;

    const emailText = document.createElement("p");
    emailText.innerText = "Email: ";
    emailText.classList.add("emailText");

    const emailElem = document.createElement("a"); // создаем элемент ссылки на электронную почту
    emailElem.innerText = `${elem.email}`;
    // emailElem.href = `mailto: ${elem.email}`; // короткая запись
    emailElem.setAttribute("href", `mailto: ${elem.email}`); // длинная запись
    emailElem.classList.add("email_elem");

    card.append(avatarElem, firstnameElem, emailText, emailElem);
    cardsContainer.append(card);
  });
};

//   .then((json) => {
//     json.data.forEach(({ email }) => {
//       const cardsElem = document.createElement("div");
//       const emailElem = document.createElement("p");

//       emailElem.innerText = `Email: ${email}`;

//       cardsElem.append(emailElem);
//       cardsContainer.append(cardsElem);
//     });
//   });
