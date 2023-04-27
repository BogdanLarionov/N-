// https://reqres.in/api/users?page=2
// https://reqres.in/api/users?page=1

const cardsContainer = document.querySelector(".cards_container");

const render = (json_data) => {
  const cards = json_data.map((elem) => {
    // метод filter(), map() всегда возвращает новый массив с return! должен возвпащать
    //   forEach() - не чего не возвразает
    // reduce() - возвращает одно значение!
    // методы уоторые что-то возвращают всегда должен быть return!
    const card = document.createElement("div");
    const avatarElem = document.createElement("img");
    avatarElem.src = elem.avatar;
    avatarElem.alt = "phota";

    const nameElem = document.createElement("p");
    nameElem.innerText = `${elem.first_name}`;

    card.append(avatarElem, nameElem);
    return card;
  });
  cardsContainer.append(...cards);
};

const request = (num) => {
  fetch(`https://reqres.in/api/users?page=${num}`)
    .then((response) => response.json())
    .then((json) => render(json.data));
};

request(1);

// https://metanit.com/web/javascript/5.6.php
// spread operator - разберает масивы на элеменеты
// const array = [1, true, "hello", 56,[2,2]];
// console.log(array); // [ 1, true, 'hello', 56 ] - выводится массив
// console.log(...array); // 1 true hello 56 - выводится отдельный элемент этошо массива
