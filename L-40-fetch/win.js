const root = document.querySelector("#root");

function getAllProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
getAllProducts();

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

function getproductCard(card_data) {
  const { title, price, image } = card_data;

  const container = document.createElement("div");
  const imgElem = document.createElement("img");
  const headerElem = document.createElement("p");
  const priceElem = document.createElement("p");

  container.classList.add("item");

  imgElem.src = image;
  headerElem.innerText = title;
  priceElem.innerText = price;

  container.append(imgElem, headerElem, priceElem);

  return container;
}

root.append(getproductCard(product));
