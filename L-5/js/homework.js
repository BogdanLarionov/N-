// 1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину. Выведите результат в консоль.

// Function Declaration
function getString(string) {
  return string.length;
}
console.log(getString("Hello,my name is Bogdan")); // 23

// ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ - function expression

let getSringLength = function getString(string) {
  return string.length;
};
console.log(getSringLength("Hello,my name is Bogdan")); // 23

// Array function
let getString = (string) => {
  return string.length;
};
console.log(getString("Hello,my name is Bogdan")); // 23

// Array function
let getString = (string) => string.length;
console.log(getString("Hello,my name is Bogdan")); // 23

// 2. Напишите функцию, которая принимает два аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// 1
function getExponent(num1, num2 = 2) {
  return num1 ** num2;
}
console.log(getExponent(3, 4)); // 81
console.log(getExponent(4, 4)); // 256
console.log(getExponent(4)); // 16
// 2
function getExponent(num1, num2 = 2) {
  return Math.pow(num1, num2);
}
console.log(getExponent(3, 4)); // 81
console.log(getExponent(3)); // 9
// arrayFunction
let getExponent = (num1, num2 = 2) => {
  return num1 ** num2;
  //   return Math.pow(num1, num2);
};
// let getExponent = (num1, num2 = 2) => num1 ** num2;
// let getExponent = (num1, num2 = 2) =>  Math.pow(num1, num2);
console.log(getExponent(2, 4)); // 16
console.log(getExponent(2)); // 4

// 3. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль. Предложите два варианта решения (через условный оператор и Math.max()).
// if, else
function genMaxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(genMaxNum(2, 4)); // 4
// Math.max();
function genMaxNum(num1, num2) {
  return Math.max(num1, num2);
}
console.log(genMaxNum(4, 5)); // 5
console.log(genMaxNum(9, 5)); // 9
// arrayFunction
const genMaxNum = (num1, num2) => {
  return Math.max(num1, num2);
};
console.log(genMaxNum(2, 4)); // 4

// 4. Напишите функцию, принимающую в качестве аргументов три числа и выводящую в консоль отсортированные числа по убыванию. Используйте условный оператор.

function sortNums(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      console.log(num1, num2, num3);
    } else {
      console.log(num1, num3, num2);
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      console.log(num2, num1, num3);
    } else {
      console.log(num2, num3, num1);
    }
  } else {
    if (num1 > num2) {
      console.log(num3, num1, num2);
    } else {
      console.log(num3, num2, num1);
    }
  }
}
sortNums(13, 49, -5); // 49 13 -5
sortNums(40, -6, 7); // 40 7 -6
sortNums(1, 38, 15); // 38 15 1

// arrayFunction
let sortNums1 = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      console.log(num1, num2, num3);
    } else {
      console.log(num1, num3, num2);
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      console.log(num2, num1, num3);
    } else {
      console.log(num2, num3, num1);
    }
  } else {
    if (num1 > num2) {
      console.log(num3, num1, num2);
    } else {
      console.log(num3, num2, num1);
    }
  }
};
sortNums1(2, 34, -3); // 34 2 -3
sortNums1(123, 322, -10); // 322 123 -10
sortNums1(15, -34, -30); // 15 -30 -34

let sortNums2 = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
};
console.log(sortNums2(2, 34, -3)); // 34 2 -3
console.log(sortNums2(123, 322, -10)); // 322 123 -10
console.log(sortNums2(15, -34, -30)); // 15 -30 -34
