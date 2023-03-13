//ФУНКЦИИ

//Функция - это всегда какое-то действие

//Правила наименования функций
//1. использовать настоящие английские слова
//2. использовать snake_case или camalCase
//3. первое слово глагол (get, show, sum, divide и т.д.)

//NaN - not a number

// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)
function sum() {
  // Тело функции
  return; // что должны вернеть
  // после return нечего не возвращается!
}
sum(); // выхов функции
// ------------------------------------------
function sum() {
  return 7 + 3;
}
console.log(sum()); // 10
// ------------------------------------------
function sum() {
  let a = 4 + 4;
  console.log(a);
  return a;
}
console.log(sum()); // 8
// ------------------------------------------
function getSum(sum_1, sum_2) {
  // sum_1, sum_2 - arguments, parametrs
  let a = sum_1 + sum_2;

  return a;
}
console.log(getSum(2, 3)); // 5
console.log(getSum(1, 3)); // 4
console.log(getSum(5, 3)); // 8
// ------------------------------------------
// можно устанавливать значение по умолчанию
function getSum(sum_1 = 2, sum_2 = 4) {
  // sum_1, sum_2 - arguments, parametrs
  let a = sum_1 + sum_2;

  return a;
}
console.log(getSum(2, 3)); // 5
console.log(getSum()); // 6
// ------------------------------------------
function sum(sum_1, sum_2) {
  // sum_1, sum_2 - arguments, parametrs
  return sum_1 + sum_2;
}
console.log(sum(2, 3)); // 5
// ------------------------------------------
function getGreeting(firstname) {
  return `Hello, ${firstname}`;
}
console.log(getGreeting("Bogdan")); // Hello, Bogdan
// ------------------------------------------
// можно устанавливать значение по умолчанию
function getSum(sum_1, sum_2 = 4) {
  // sum_1, sum_2 - arguments, parametrs
  return sum_1 + sum_2;
}
console.log(getSum(3)); // 5
// можно устанавливать значение по умолчанию
function getGreeting(firstname = "Alena") {
  return `Hello, ${firstname}`;
}
console.log(getGreeting("Bogdan")); // Hello, Bogdan
console.log(getGreeting()); // Hello, Alena
// ------------------------------------------
//NaN - not a number
// 5 + undefined = NaN
// 5 + '5' = 55
// 5 + true = NaN

//Напишите функцию, принимающую 3 аргумента с числовым значением и возвращающую результат умножения чисел друг на друга. Значение последнего аргумента по умолчанию должно быть равно 1.
//Выведите в консоль результат вызова функции.

function getMultiplication(num_1, num_2, num_3 = 1) {
  return `Answer: ${num_1 * num_2 * num_3}`;
}
console.log(getMultiplication(2, 4, 3)); // Answer: 24
console.log(getMultiplication(8, 2)); // Answer: 16

//Напишите функцию, принимающую 2 аргумента firstname и age и возвращающую сообщение в формате "Hello, FIRSTNAME. Your age is AGE". По умолчанию указать значения 'Elena' для firstname и 18 для age

function getGreeting(firstname = "Elena", age = 18) {
  return `Hello, ${firstname}. our age is ${age}`;
}
console.log(getGreeting("Bogdan", 32)); // Hello, Bogdan. our age is 32
console.log(getGreeting()); // Hello, Elena. our age is 18
console.log(getGreeting(undefined, 12)); // Hello, Elena. our age is 12

//Напишите функцию, которая принимает в себя 2 аргумента и возвращает результат деления большего числа на меньшее.
// 1
function getDivide(num_1, num_2) {
  if (num_1 > num_2) {
    return num_1 / num_2;
  } else {
    return num_2 / num_1;
  }
}
console.log(getDivide(4, 2)); // 2
console.log(getDivide(6, 4)); // 1.5
// 2
function getDivide1(num_1, num_2) {
  return Math.max(num_1, num_2) / Math.min(num_1, num_2);
}
console.log(getDivide1(2, 4)); // 2
console.log(getDivide1(4, 2)); // 2
// ------------------------------------------
console.log(getHello("Bogdan", "Larionov")); // Hello Bogdan Larionov!
// function declaration  !!!
function getHello(name, lastname) {
  return `Hello ${name} ${lastname}!`;
}
console.log(getHello("Bogdan", "Larionov")); // Hello Bogdan Larionov!

// в  declaration function можно обьявлять в любом месте, даже перед самой футкцией! console.log(getHello()); как в примере. Только declaration function !!!
// ------------------------------------------

//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ - function expression

let greeting = function getHello(name, lastname) {
  return `Hello ${name} ${lastname}!`;
};
console.log(greeting("Bogdan", "Larionov")); // Hello Bogdan Larionov!

//СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)

let greeting_arrow = (name, lastname) => {
  return `Hello ${name} ${lastname}`;
};

console.log(greeting_arrow("Bogdan", "Larionov")); // Hello Bogdan Larionov

// если код в одну строку можно сократить
let greeting_arrow1 = (name, lastname) => `Hello ${name} ${lastname}`;
console.log(greeting_arrow1("Bogdan", "Larionov")); // Hello Bogdan Larionov
