let products = [
  {
    id: 1,
    title: "Велосипед",
    price: 45000,
  },

  {
    id: 2,
    title: "Ролики",
    price: 1500,
  },

  {
    id: 3,
    title: "Самокат",
    price: 12000,
  },

  {
    id: 4,
    title: "Лыжи",
    price: 23000,
  },
  {
    id: 5,
    title: "Сноуборд",
    price: 20000,
  },
];

// создать функицю, которая на вход получает title и price и возвращает
//  <div>
//   <p>Сноуборд</p>
//   <p>2000</p>
// </div>

const rootElem = document.querySelector("#root");
const ProductContainer = document.createElement("div");
ProductContainer.classList.add("product-container");
rootElem.append(ProductContainer);

// создать функцию, которая возвращает элемент (button) удаление

function createDeleteButton() {
  const button = document.createElement("button");
  button.innerText = "X";
  button.classList.add("delite_btn");
  return button;
}

// создать функцию emptyList которая вощвращает параграф с текстом "Таваров нет."
function emptyList() {
  p_elem = document.createElement("p");
  p_elem.innerText = "Таваров нет.";
  return p_elem;
}

function createProductElement(id, title, price) {
  const container = document.createElement("div");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");

  const deliteBtn = createDeleteButton();

  // Повесить обработчик удаления на кнопку удаления
  deliteBtn.addEventListener(
    "click",
    () => deleteProduct(id)
    // console.log(deliteBtn);
  );

  titleElem.innerText = title;
  priceElem.innerText = price;

  container.classList.add("product-item");

  container.append(titleElem, priceElem, deliteBtn);

  // повесить на карточки обработку событий click и выводить какой-нибудь текст в консоль
  container.addEventListener("click", (event) => {
    // console.log("hello");
    event.target.classList.toggle("active");
  });

  return container;
}

// создать еще одни div и залить в него карточки с продуктами этот div добавить в #root

// map()

function render() {
  ProductContainer.innerText = "";
  if (products.length === 0) {
    ProductContainer.append(emptyList());
  } else {
    products.forEach((elem) => {
      const product = createProductElement(elem.id, elem.title, elem.price);
      ProductContainer.append(product);
    });
  }
}

function deleteProduct(id) {
  products = products.filter((product) => product.id !== id);
  render();
}
render();

// внешнему div элементу добавить класс product-container
// div элементу, который является карточкой, присвойте класс product-item

// написать функцию, которая получает id товара и удалеет его из массива

// deleteProduct(3);
// rootElem.append(createDeleteButton());

// -----------------------------------------------

// Обработка формы добавления

// 1) создать переменную с ссылкой на форму
const add_form = document.querySelector("#add_form");

// 2) Повесить обработчик submit на форму add_form и при отправке формы выводить что-то в консоль
add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event.target);

  const input_title = event.target.title;
  const input_price = event.target.price;

  const new_product = {
    id: Date.now(),
    title: input_title.value,
    price: input_price.value,
  };

  products.push(new_product);
  render();
  // console.log(input_title, input_price);
  // console.log(input_title.value, input_price.value);

  input_title.value = ""; // очистка формы ввода
  input_price.value = ""; // очистка формы ввода
});
