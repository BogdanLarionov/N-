const workersForm = document.querySelector(".workers_form");
const cardContainer = document.querySelector(".card_container");
let workers_array = [];

const render = () => {
  cardContainer.innerText = ""; // что-бы не дублировались карточки!// очищаем контейнер перед новым рендером
  workers_array.forEach(({ firstname, lastname, rate, days }) => {
    const card = document.createElement("div");
    const nameElem = document.createElement("p");
    const salaryElem = document.createElement("p");

    nameElem.innerText = `Name: ${firstname} ${lastname}`;
    salaryElem.innerText = `Salary: ${rate * days} $`;

    card.classList.add("card");

    card.append(nameElem, salaryElem);
    cardContainer.append(card);
  });
};

workersForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, lastname, rate, days } = event.target;

  workers_array.push({
    firstname: name.value,
    lastname: lastname.value,
    rate: rate.value,
    days: days.value,
  });

  console.log(workers_array);

  render();

  // name.value = "";
  // lastname.value = "";
  // rate.value = "";
  // days.value = "";
});
