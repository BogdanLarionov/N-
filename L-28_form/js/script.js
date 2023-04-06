const form = document.querySelector("#add_product_form");
const products = document.querySelector("#products");

// создать функцию getCard, которая в качестве аргумента получает title и price и возвращает div с указанными анутри title и price
function getCard(title, price) {
  const container = document.createElement("div");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");

  titleElem.innerText = `Название: ${title}`;
  priceElem.innerText = `Цена: ${price}`;

  container.append(titleElem, priceElem);
  return container;
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); //
  //   console.log("hello");
  //   console.log(event.target.title);
  //   console.log(event.target.title.value);
  //   console.log(event.target.price.value);
  //   console.log(event.target.title.value, event.target.price.value);

  // Доинная форма
  //   const title = event.target.title;
  //   const price = event.target.price;
  //   console.log(title.value, price.value);

  // короткая форма деструктивное присвоение или диструкторизация  Destructuring assignment https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

  // вывести в консоль цену и название товара
  const { title, price } = event.target;
  //   console.log(title.value, price.value);
  const card = getCard(title.value, price.value);
  products.append(card);

  card.classList.add("card");

  title.value = "";
  price.value = "";
});
