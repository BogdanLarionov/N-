// Создайте форму сбора данных работников с пятью полями: Имя, Фамилия, Email, Ссылка на фото, Прогресс. Поля ввода должны включать "текст-подсказку".

// Email должен быть кликабельным.
// Фото должно отображаться.

// Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.

// После отправки необходимо очистить инпуты.

const form = document.querySelector(".form");
const cardSContainer = document.querySelector(".cards_container");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cardElem = document.createElement("div");
  const nameElem = document.createElement("p");
  const emailElem = document.createElement("a");
  const emailTextElem = document.createElement("span");
  // const emailTextElem = document.createElement("p");
  //   const emailTextElem = document.createElement("span");
  const photoElem = document.createElement("img");
  const progressContainer = document.createElement("div");
  const progressLine = document.createElement("div");
  const progressValue = document.createElement("p");

  const { firstname, lastname, email, photo, progress } = event.target;

  nameElem.innerText = `Name: ${firstname.value} ${lastname.value}`;
  emailTextElem.innerText = "Email: ";
  emailElem.innerText = email.value;
  photoElem.alt = "photo";

  emailTextElem.style.display = "inline";

  cardElem.classList.add("card");

  emailElem.href = `mailto:${email}`;
  // emailElem.setAttribute('href', ())
  photoElem.src = photo.value;

  cardElem.append(
    nameElem,
    emailTextElem,
    emailElem,
    photoElem,
    progressContainer,
    progressLine,
    progressValue
  );

  cardSContainer.append(cardElem);
});
