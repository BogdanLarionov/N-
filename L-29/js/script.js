// cards_info - создаем массив
//Что мы делаем:
//1. при отправке формы данные записываются в массив cards_info в виде объектов
//2. из массива cards_info с {} достаем данные и рендерим из них карточки

const workersForm = document.querySelector(".workers_form");
const cardContainer = document.querySelector(".cards_container");
let cards_info = [];

const render = () => {
  cardContainer.innerText = ""; // что-бы не дублировались карточки!// очищаем контейнер перед новым рендером
  cards_info.forEach((elem) => {
    const card = document.createElement("div");
    const nameElem = document.createElement("p");
    const lastnameElem = document.createElement("p");
    const mailElem = document.createElement("span");
    const mailText = document.createElement("a");
    const photoLinkElem = document.createElement("img");

    const progressContainer = document.createElement("div");
    const progressLine = document.createElement("div");
    const progressValue = document.createElement("p");

    nameElem.innerText = `Name: ${elem.firstname} ${elem.lastname}`;
    mailElem.innerText = `Email: `;
    mailText.innerText = `${elem.email}`;

    mailText.href = `mailto:${elem.email}`;
    mailText.style.textDecoration = "none";
    mailText.style.color = "black";
    photoLinkElem.src = `${elem.link}`;
    progressValue.innerText = `${elem.progress} %`;
    photoLinkElem.alt = `photo`;
    photoLinkElem.classList.add("img");

    progressLine.style.width = elem.progress + "%";

    progressLine.style.backgroundColor =
      elem.progress >= 75 ? "green" : elem.progress >= 50 ? "yellow" : "red";

    card.classList.add("card");
    progressContainer.classList.add("progress-container");
    progressLine.classList.add("progress-line");
    progressValue.classList.add("progress-value");

    card.append(
      nameElem,
      lastnameElem,
      mailElem,
      mailText,
      photoLinkElem,
      progressContainer
    );
    progressContainer.append(progressLine, progressValue);

    cardContainer.append(card);
  });
};

workersForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, lastname, mail, link, progress } = event.target;

  cards_info.push({
    firstname: name.value,
    lastname: lastname.value,
    email: mail.value,
    link: link.value,
    progress: progress.value,
  });

  name.value = "";
  lastname.value = "";
  mail.value = "";
  link.value = "";
  progress.value = "";

  console.log(cards_info); // выводим что записалось в массив

  // render();
  render(cards_info[cards_info.length - 1]);
});
