// https://flatuicolors.com/palette/gb - сайт с цветами

// циклы

// 1.создаьть паранраф
// 2. записать в него тескт
// 3. добавить eго в root

const rootElem = document.querySelector("#root");
console.log(rootElem);

const textElem = document.createElement("p");

textElem.innerText = "Text";

rootElem.append(textElem);

// создать массив из трех элементов  для каждого элемента создать параграф и записать в него текст параграфы необходимо добавить в root элемент

// повесить оброботчик события клика на параграфы при клике на параграф в консоль должно выводиться слово

// по нажатию на пораграф ему должен присваеваться класс active

// преобразовать процесс таким образом, чтобы  по нажатию на p_elem active добавлялся, если его нет и удалятся. если он есть - toggle

const words = ["Привет", "Пока", "Самокат", "Еда"];

words.forEach((words) => {
  const p_elem = document.createElement("p");
  p_elem.innerText = words;
  p_elem.classList.add("card");
  rootElem.append(p_elem);

  p_elem.addEventListener("click", (event) => {
    // console.log(words);
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target === p_elem);
    // p_elem.classList.add("active");
    // event.target.classList.add("active");
    event.target.classList.toggle("active");
  });
});
