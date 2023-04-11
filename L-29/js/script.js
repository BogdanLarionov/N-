const workersForm = document.querySelector(".workers_form");
const cardContainer = document.querySelector(".cards_container");

workersForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { name, lastname, mail, link, progress } = event.target;

  const card = document.createElement("div");
  const nameElem = document.createElement("p");
  const lastnameElem = document.createElement("p");
  const mailElem = document.createElement("span");
  const mailText = document.createElement("a");
  const photoLinkElem = document.createElement("img");

  const progressContainer = document.createElement("div");
  const progressLine = document.createElement("div");
  const progressValue = document.createElement("p");

  nameElem.innerText = `Name: ${name.value} ${lastname.value}`;
  mailElem.innerText = `Email: `;
  mailText.innerText = `${mail.value}`;

  mailText.href = `mailto:${mail.value}`;
  photoLinkElem.src = `${link.value}`;
  progressValue.innerText = `${progress.value} %`;
  photoLinkElem.alt = `photo`;
  photoLinkElem.classList.add("img");

  progressLine.style.width = progress.value + "%";

  progressLine.style.backgroundColor =
    progress.value >= 75 ? "green" : progress.value >= 50 ? "yellow" : "red";

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

  name.value = "";
  lastname.value = "";
  mail.value = "";
  link.value = "";
  progress.value = "";
});
