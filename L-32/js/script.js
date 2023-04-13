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
