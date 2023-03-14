function pow(value, p) {
  const result = value ** p;
  console.log(result);
}
pow(2, 4); // 16
pow(4, 5); // 1024
pow(12, 5); // 248832

// перепишим в array function
const pow = (value, p) => {
  const result = value ** p;
  console.log(result);
};
pow(2, 4); // 16
pow(4, 5); // 1024
pow(12, 5); // 248832

// короткий способ
const pow = (value, p) => value ** p;
console.log(pow(2, 4)); // 16
console.log(pow(4, 5)); // 1024
console.log(pow(12, 5)); // 248832

// необходимо написать стрелочнею функцию, которая получает в качестве аргумента число и возвращает true,  если оно больше 0 и false в ином случае
// 1
const arrFunc = (num) => {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};
console.log(arrFunc(0)); // false
console.log(arrFunc(10)); // true
console.log(arrFunc(-10)); // false
// 2
// const check = num => num > 0;
const check = (num) => num > 0;
console.log(check(12)); // true
console.log(check(-12)); // false

// написать стрелочную функцию, которая в качестве аргумента получает число (год) и возвращает true если год високосный и false в ином случае

const year = 2022;
if (year % 4 === 0 && year % 100 != 0 && year % 400 === 0) {
}
const check_year = (year) =>
  (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
console.log("2022:", check_year(2022)); // 2022: false
console.log("2023:", check_year(2023)); // 2023: false
console.log("2024:", check_year(2024)); // 2024: true
console.log("2025:", check_year(2025)); // 2025: false
console.log("2026:", check_year(2026)); // 2026: false
console.log("2027:", check_year(2027)); // 2027: false
console.log("2028:", check_year(2028)); // 2028: true

// написать функцию, которая получает в качестве аргумента число и возврозает true, если оно четное  и false если нечетное
// 1
function getNum(value) {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(getNum(2)); // true
console.log(getNum(1)); // false
console.log(getNum(3)); // false
console.log(getNum(4)); // true
// 2
const getNum = (value) => {
  return value % 2 === 0;
};
console.log(getNum(1)); // false
console.log(getNum(2)); // true
console.log(getNum(3)); // false
console.log(getNum(4)); // true
// 3
const getNum = (value) => value % 2 === 0;
console.log(getNum(1)); // false
console.log(getNum(2)); // true
console.log(getNum(3)); // false
console.log(getNum(4)); // true
// 4
// передали в переменную функуию
const getNum = (value) => value % 2 === 0;
const a = getNum;
console.log(a(1)); // false
console.log(a(2)); // true
// ----------------------------------
// передаем фкнкуию в качесте аргкмента callback Function
const compare = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
const run_with_input_data = (func) => {
  const value_1 = +prompt("Укажите число: ");

  const value_2 = +prompt("Укажите число: ");

  return func(value_1, value_2);
};
const result = run_with_input_data(compare);
console.log(result);
// ----------------------------------
// функция setTimeout() - вывести 12 через 1 сек - (100)
// callback Function
setTimeout(() => console.log(12), 100); // 12
