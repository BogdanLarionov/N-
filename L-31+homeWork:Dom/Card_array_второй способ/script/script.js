const formElem = document.querySelector(".form");
const cardsContainer = document.querySelector(".cards_container");
const workers_array = [];

const render = () => {
  cardsContainer.innerText = ""; // что-бы не дублировались карточки!// очищаем контейнер перед новым рендером

  workers_array.forEach((elem) => {
    const card = document.createElement("div");
    const nameElem = document.createElement("p");
    const salaryElem = document.createElement("p");

    nameElem.innerText = `Name: ${elem.firstname} ${elem.lastname}`;
    salaryElem.innerText = `Salary: ${elem.rate * elem.days} € `;

    card.classList.add("card");

    card.append(nameElem, salaryElem);
    cardsContainer.append(card);
  });
};

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, lastname, rate, days } = event.target;

  workers_array.push({
    firstname: name.value,
    lastname: lastname.value,
    rate: rate.value,
    days: days.value,
  });

  name.value = "";
  lastname.value = "";
  rate.value = "";
  days.value = "";

  console.log(workers_array);

  render(workers_array[workers_array.length - 1]);
  //   render();
});
