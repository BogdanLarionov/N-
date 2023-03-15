// 1. Напишите функцию, которая принимает в качестве аргумента имя (строку), а возвращает сообщение в формате: Dear ИМЯ, welcome. Выведите результат в консоль. Запишите функцию в двух форматах (function declaration и arrow function).

// function declaration
function getName(name) {
  return `Dear ${name}, welcome`;
}
console.log(getName("Bogdan")); // Dear Bogdan, welcome
console.log(getName("Alena")); // Dear Alena, welcome

// arrow function
const getName = (name) => {
  return `Dear ${name}, welcome`;
};
console.log(getName("Bogdan")); // Dear Bogdan, welcome
// short arrow function
const getName = (name) => `Dear ${name}, welcome`;
console.log(getName("Bogdan")); // Dear Bogdan, welcome
// ---------------------------------------------------------------------------------------
//Напишите функцию, которая принимает в качестве аргументов два значения: имя и возраст. Если переданный возраст меньше 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are younger than 18. Если возраст больше или равен 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are adult.
// Запишите функцию в двух форматах (function declaration и arrow function).

// function declaration
function getMassage(name, age) {
  if (age < 18) {
    return `Dear ${name}, you are younger than 18.`;
  } else {
    return `Dear ${name}, you are adult.`;
  }
}
console.log(getMassage("Bogdan", 18)); // Dear Bogdan, you are adult.
console.log(getMassage("Alona", 10)); // Dear Alona, you are younger than 18.
console.log(getMassage("Xenia", 19)); // Dear Xenia, you are adult.

// arrow function
const getMassage = (name, age) => {
  if (age < 18) {
    return `Dear ${name}, you are younger than 18.`;
  } else {
    return `Dear ${name}, you are adult.`;
  }
};
console.log(getMassage("Bogdan", 18)); // Dear Bogdan, you are adult.
console.log(getMassage("Alona", 10)); // Dear Alona, you are younger than 18.
console.log(getMassage("Xenia", 19)); // Dear Xenia, you are adult.

// Ternary operator
// условие_1 ? условие_1 верно: условие_1 неверно !!!!!!
const getMassage = (name, age) => {
  return age < 18
    ? `Dear ${name}, you are younger than 18.`
    : `Dear ${name}, you are adult.`;
};
console.log(getMassage("Bogdan", 18)); // Dear Bogdan, you are adult.
console.log(getMassage("Alona", 10)); // Dear Alona, you are younger than 18.
console.log(getMassage("Xenia", 19)); // Dear Xenia, you are adult.

// short arrow function with ternary operator
const getMassage = (name, age) =>
  age < 18
    ? `Dear ${name}, you are younger than 18.`
    : `Dear ${name}, you are adult.`;

console.log(getMassage("Bogdan", 18)); // Dear Bogdan, you are adult.
console.log(getMassage("Alona", 10)); // Dear Alona, you are younger than 18.
console.log(getMassage("Xenia", 19)); // Dear Xenia, you are adult.
// ---------------------------------------------------------------------------------------
// 3. Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения. Значение второго аргумента должно быть указано по умолчанию 2. Запишите функцию в двух форматах (function declaration и arrow function).

// function declaration
function getMultiplication(num_1, num_2 = 2) {
  return num_1 * num_2;
}
console.log(getMultiplication(2, 3)); // 6
console.log(getMultiplication(2)); // 4

// arrow function
const getMultiplication = (num_1, num_2 = 2) => {
  return num_1 * num_2;
};
// short arrow function
// const getMultiplication = (num_1, num_2 = 2) => num_1 * num_2;
console.log(getMultiplication(2, 3)); // 6
console.log(getMultiplication(2)); // 4

// ---------------------------------------------------------------------------------------
// Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее значение. Выведите результат в консоль. Предложите два варианта решения. Запишите функцию в двух форматах (function declaration и arrow function).

// function declaration
function getLitteNumber(num1, num2) {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(getLitteNumber(2, 4)); // 2
console.log(getLitteNumber(4, 2)); // 2

// arrow function
const getLitteNumber = (num1, num2) => {
  if (num1 < num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(getLitteNumber(2, 4)); // 2
console.log(getLitteNumber(4, 2)); // 2

// short arrow function with ternary operator
const getLittetNumber = (num1, num2) => {
  return num1 < num2 ? num1 : num2;
};
// const getLittetNumber = (num1, num2) => (num1 < num2 ? num1 : num2);
console.log(getLittetNumber(2, 4)); // 2
console.log(getLittetNumber(4, 2)); // 2

// Способ через метод Math.min(), function declaration
function getMinNum(num1, num2) {
  return Math.min(num1, num2);
}
console.log(getMinNum(2, 4)); // 2
console.log(getMinNum(4, 3)); // 3

// Способ через метод Math.min(), arrow function
const getMinNum = (num1, num2) => {
  return Math.min(num1, num2);
};
// const getMinNum = (num1, num2) => Math.min(num1, num2);
console.log(getMinNum(2, 4)); // 2
console.log(getMinNum(4, 3)); // 3
