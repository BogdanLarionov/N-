// function - это как некая загатовка, шаблон!
// возводим в степень
function pow(value, p) {
  const result = value ** p;
  console.log(result);
}
pow(2, 4); // 16
pow(4, 5); // 1024
pow(12, 5); // 248832

// метод 2
function getPow(num1, num2) {
  return Math.pow(num1, num2);
}
console.log(getPow(2, 4)); // 16
console.log(getPow(4, 5)); // 1024
console.log(getPow(12, 5)); // 248832
// -------------------------------------
function pow(value, p) {
  const result = value ** p;
  return result;
}
const result_1 = pow(12, 2);
const result_2 = pow(12, 3);
const result_3 = pow(12, 4);
console.log(result_1); // 144
console.log(result_2); // 1728
console.log(result_3); // 20736
// console.log(result_1, result_2, result_3); // 20736
// -------------------------------------
// Опишите функцию, которая в качестве аргумента получает два числа и возвращает наибольшее
function getMaxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(getMaxNum(2, 4)); // 4
console.log(getMaxNum(8, 4)); // 8

// Описать функцию, которая получает в качестве аргумента число и возвращает true, если оно больше или равно нулю и false в ином случае
// 1
function getResult(value) {
  if (value >= 0) {
    return true;
  } else {
    return false;
  }
}
console.log(getResult(99)); // true
console.log(getResult(0)); // true
console.log(getResult(-99)); // false
// 2
function getResult(value) {
  return value >= 0;
}
console.log(getResult(99)); // true
console.log(getResult(0)); // true
console.log(getResult(-99)); // false

// Написать функцию, которая принимает 3 числовых аргумента и проверяет возможность построения треуголиника   с указанными сторонами. Если построить можно, функция возвощает true, а в ином случае fasle

function triangel_check(value_1, value_2, value_3) {
  if (
    value_1 + value_2 > value_3 &&
    value_3 + value_2 > value_1 &&
    value_3 + value_1 > value_2
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(triangel_check(3, 4, 5)); // true
console.log(triangel_check(4, 5, 3)); // true
console.log(triangel_check(5, 3, 4)); // true
console.log(triangel_check(3, 4, 15)); // false
console.log(triangel_check(4, 15, 3)); // false
console.log(triangel_check(15, 3, 4)); // false
// -------------------------------------

// С использованием Math.random() и Math.round() реализуйте функцию, которая возвращает случайное число от 1 до 6
// 1
const getNum = Math.round(Math.random() * 5 + 1);
console.log(getNum);
// 2
function random_value() {
  return Math.round(Math.random() * 5 + 1);
}
console.log(random_value());
// -------------------------------------
