// Вывести текст, введенный в инпут, в консоль

const showTextBtn = document.querySelector(".show_text_btn");

const showInputBtn = document.querySelector(".show_input_btn");

showTextBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(showInputBtn.value);
  showInputBtn.value = "";
});
// ___________________________________________

//Поменять текст в инпуте с ??? на !!!, при двайном клике менять обратно

const showChangeBtn = document.querySelector(".show_change_btn");
const showChangeInputBtn = document.querySelector(".show_change_input_btn");

showChangeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  showChangeInputBtn.value = "!!!";
});

showChangeBtn.addEventListener("dblclick", (event) => {
  event.preventDefault();
  showChangeInputBtn.value = "???";
});
// ___________________________________________

//Поменять цвет фона на черный

const blackFon = document.querySelector(".black_btn");
const whiteBtn = document.querySelector(".white_btn");

blackFon.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
});

whiteBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
// ___________________________________________

//Поменять цвет на черный/белый
const mixBtn = document.querySelector(".mix_btn");

mixBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  mixBtn.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "white";
  });
});

// ___________________________________________

//Поменять цвет на черный/белый
const changeModeBtn = document.querySelector(".change_mode_btn");

changeModeBtn.addEventListener("click", () =>
  document.body.classList.toggle("black_mode")
);
// css
// .black_mode {
//   background-color: black;
// }
// ___________________________________________
// classList.add("class"); // добавляет класс
// classList.remove("class"); // удаляет класс
// classList.toggle("class"); // удалете класс, если он есть. добавляет класс, если его нет!
// ___________________________________________

const changeModeBtn_two = document.querySelector(".change_mode_btn_two");

changeModeBtn_two.addEventListener("click", () => {
  const background_Color =
    document.body.style.backgroundColor === "black" ? "white" : "black";

  document.body.style.backgroundColor = background_Color;
});
// ___________________________________________
// Менять цвет кнопки на случайный

const random_color_btn = document.querySelector(".random_calor_btn");
const getRandomNum = () => Math.round(Math.random() * 255);

//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255

random_color_btn.addEventListener(
  "click",
  (event) =>
    (event.target.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`)
);
// ___________________________________________

//Менять цвет фон на случайный
const background = document.querySelector(".random_bacground_calor_btn");
const getRandom = () => Math.round(Math.random() * 255);

background.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
});
// ___________________________________________
//Менять содержимое инпута на значение из массива

const changeBtn = document.querySelector(".change_btn");
const changeInput = document.querySelector(".change");

const symbols = ["...", "!!!", "+++", "???"];
let symvals_index = 0;

changeBtn.addEventListener("click", () => {
  changeInput.value = symbols[symvals_index++ % symbols.length];
});

//symbols_index++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0
// ___________________________________________
//Создать слайдер с фотографиями из массива

const imgSlider = document.querySelector(".img_slider");
const photos = [
  "https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg",
  "https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg",
  "https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg",
];

let photoIndex = 0;

imgSlider.addEventListener("click", (event) => {
  event.target.src = photos[photoIndex++ % photos.length];
});
