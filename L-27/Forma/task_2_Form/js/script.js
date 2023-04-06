//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.
// https://reqres.in/ - ссылки на фото

const formElem = document.querySelector(".workers_form");
const divElem = document.querySelector(".container");

formElem.addEventListener("submit", (event) => {
  event.preventDefault(); // запрещает обновлять страницу после отправки формы
  console.log(event.target.name.value); // вывели значение из name в консоль

  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const surnameElem = document.createElement("p");
  const ageElem = document.createElement("p");
  const salaryElem = document.createElement("p");
  const imgElem = document.createElement("img");

  card.classList.add("card");

  // длинный способ
  //   nameElem.innerText = `Name: ${event.target.name.value}`;

  const { name, surname, age, rate, days, img } = event.target;

  nameElem.innerText = `Name: ${name.value}`;
  surnameElem.innerText = `Surname: ${surname.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  salaryElem.innerText = `Salary: ${rate.value * days.value} `;

  // короткий способ
  imgElem.src = `${img.value}`;
  imgElem.alt = `picture`;
  // длинный способ
  //   imgElem.setAttribute("src", img.value);
  //   imgElem.setAttribute("alt", "photo");

  imgElem.classList.add("img");

  card.append(nameElem, surnameElem, ageElem, salaryElem, imgElem);
  divElem.append(card);

  name.value = "";
  surname.value = "";
  age.value = "";
  rate.value = "";
  days.value = "";
  img.value = "";
});
