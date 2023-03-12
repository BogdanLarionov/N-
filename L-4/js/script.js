alert("hello");
// ---------------
let firstName = prompt("What is your name?");
let lastName = prompt("What is your lastname?");
const age = prompt("What is your age?");
// ---------------
if (age < 18) {
  console.log(`Hi, ${firstName} ${lastName}. Your age is ${age}`);
} else if (age > 18) {
  console.log(`Hello, ${firstName} ${lastName}. Your age is ${age}`);
} else {
  console.log(`Dear, ${firstName} ${lastName}. Your age is ${age}`);
}
// ---------------
// Cгенерируйте случайное число от 0 до 1. Округлите его до одного знака после точки, тип выводимых данных долден быть number.
// Напишите условный оператор. Если случайноe число больше 0.5, то выводить в консоль сообщение "Победа". Если случайное число меньше 0.5, то выводить в консоль сообщение "Поражение". Если случайное число равно 0.5, то выводить в урнсоль сообщение "Ничья"
let random = Math.random().toFixed(1);
// let number = +Math.random().toFixed(1);
console.log(typeof random); // string
console.log(typeof +random); // number
console.log(+random); // 0.1
if (random > 0.5) {
  console.log("Победа");
} else if (random < 0.5) {
  console.log("Поражение");
} else {
  console.log("Ничья");
}
// ---------------
// Math.random();
// Math - обьект;
// .random() - метод

// let text = "Nelli";
// text.length: length -  свойства
