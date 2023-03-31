const rootElem = document.querySelector("#root");
console.log(rootElem);

const div_elem = document.createElement("div");
const img_elem = document.createElement("img");
const text_elem = document.createElement("p");

// img_elem.setAttribute("src", 'link'); - длинная запись
// img_elem.src = "link"; -  короткая запись
// src - атребут
img_elem.src =
  "https://upload.wikimedia.org/wikipedia/commons/e/ea/Alexandr_Ivanov_001.jpg"; // короткая запись

text_elem.innerText = "Описание пейжаза";

// добавили кдасс
div_elem.classList.add("card");

div_elem.append(img_elem, text_elem);
rootElem.append(div_elem);

// добавить div  и 4 пораграфа внутри него с каким-либо текстом, созданый div должен быть помещен в #root
const ruutElem = document.querySelector(".ruut");

const divElem = document.querySelector("div");

const first_p = document.createElement("p");
const second_p = document.createElement("p");
const third_p = document.createElement("p");
const four_p = document.createElement("p");

first_p.innerText = "порагроф один";
second_p.innerText = "порагроф два";
third_p.innerText = "порагроф три";
four_p.innerText = "порагроф четыри";

divElem.append(first_p, second_p, third_p, four_p);
ruutElem.append(divElem);
// -------------------------------------------------------------
const container = document.createElement("div");
const text = ["text-1", "text-2", "text-3", "text-4"];

const p_elem = text.forEach((text) => {
  const p_elem = document.createElement("p");
  p_elem.innerText = text;
  container.append(p_elem);
});
rootElem.append(container);

// -------------------------------------------------------------

const container_2 = document.createElement("div");
const texts = ["text-5", "text-6", "text-7", "text-8"];

const p_list = texts.map((text) => {
  const p_elem = document.createElement("p");
  p_elem.innerText = text;
  return p_elem;
});
// ... спред оперптор
container.append(...p_list);
rootElem.append(container);
