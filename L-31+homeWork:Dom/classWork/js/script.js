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
