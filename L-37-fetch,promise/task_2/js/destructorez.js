const cardsContainer = document.querySelector(".cards_container");

const render = (json_data) => {
  cardsContainer.innerText = ""; // очистить контейнер при нажатии на кнопку, что бы не дублировалось!
  const cards = json_data.map(({ avatar, first_name, last_name, email }) => {
    // метод filter(), map() всегда возвращает новый массив с return! должен возвпащать
    //   forEach() - не чего не возвразает
    // reduce() - возвращает одно значение!

    const card = document.createElement("div");
    card.classList.add("card");
    const avatarElem = document.createElement("img");
    avatarElem.src = avatar;
    avatarElem.alt = "phota";

    const nameElem = document.createElement("p");
    nameElem.innerText = `${first_name + " " + last_name}`;

    const emailElem = document.createElement("a");
    emailElem.innerText = email;
    emailElem.href = `mailto:${email}`;
    emailElem.classList.add("email");

    card.append(avatarElem, nameElem, emailElem);
    return card;
  });
  cardsContainer.append(...cards);
};

const request = (num) => {
  fetch(`https://reqres.in/api/users?page=${num}`)
    .then((response) => response.json())
    .then((json) => render(json.data));
};

request(2);

// [one_btn, two_btn] - присвоили класс через деструкторизацию
const [one_btn, two_btn] = document.querySelectorAll(".trigers button"); // querySelectorAll возарощает колекцию эллементов

one_btn.addEventListener("click", () => {
  request(1);
});
two_btn.addEventListener("click", () => {
  request(2);
});

// const triggers = document.querySelectorAll(".triggers button");
// triggers.forEach((e, i) => e.addEventListener("click", () => request(i + 1));
