const data = [
  {
    id: 1,
    title: "Велосипед",
    price: 100,
  },

  {
    id: 2,
    title: "Самокат",
    price: 500,
  },

  {
    id: 3,
    title: "Скейт",
    price: 200,
  },

  {
    id: 4,
    title: "Лыжи",
    price: 300,
  },
];

const rootElem = document.querySelector(".root");
console.log(rootElem);
// forEach - метод массива
// data.forEach(({ id, title, price }) => { // = product - деструктаризация
data.forEach((product) => {
  const cardElem = document.createElement("div");
  const idElem = document.createElement("p");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");

  //   idElem.innerText = `ID: ${id}`; // деструктаризация
  //   titleElem.innerText = `Title: ${title}`; // деструктаризация
  //   priceElem.innerText = `Price: ${price}`; // деструктаризация

  idElem.innerText = `ID: ${product.id}`;
  titleElem.innerText = `Title: ${product.title}`;
  priceElem.innerText = `Price: ${product.price}`;

  cardElem.classList.add("card");

  rootElem.append(cardElem);
  cardElem.append(idElem, titleElem, priceElem);
});
