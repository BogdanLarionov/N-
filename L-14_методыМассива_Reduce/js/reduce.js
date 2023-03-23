// reduce()
// prec -  результат расчитанный преведушим вызовом нашей callback function
//value - текушее значение
const array = [12, 4, 45, 32, 3, 43];
result = array.reduce((prev, value) => prev + value);
console.log(result); // 139

// (12, 4) => 16
// (16, 45) => 61
// (61, 32) => 93
// (93, 3) => 96
// (96, 43) => 139

const array = [12, 4, 45, 32, 3, 43];
result = array.reduce((prev, value) => prev + value, 1000); // 1000 это начало от куда стартует отсчет как 0!
console.log(result); // 10139

// (1000, 12) => 1012
// (1012, 4) => 1016
// (1016, 45) => 1093
// (1093, 3) => 1096
// (1096, 43) => 10139

// используя метод reduce() найдите произведение (умножение) всех чисел массивоа
const array = [2, 3, 4, 5];
let result = array.reduce((accumulator, value) => accumulator * value);
console.log(result); // 120

// используя метод reduce() найдите максимальное значение в массиве
const array = [2, 3, 4, 5, 3];
let result = array.reduce((accumulator, value) => {
  if (accumulator > value) {
    return accumulator;
  } else {
    return value;
  }
});

console.log(result); // 5

const array = [2, 3, 4, 5, 3];
let result = array.reduce((accumulator, value) =>
  accumulator > value ? accumulator : value
);
console.log(result); // 5

// доработать процесс reduce, чтобы он выводил сумму (сумма - прибавить) четных чисел

const array = [2, 3, 4, 5, 3];
const sumOfEvenNumbers = array.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);

console.log(sumOfEvenNumbers); // Output: 6 (2 + 4)

const array = [2, 3, 4, 5, 3];
const sumOfEvenNumbers = array.reduce(
  (accumulator, currentValue) =>
    currentValue % 2 === 0 ? accumulator + currentValue : accumulator,
  0
);
console.log(sumOfEvenNumbers); // Output: 6 (2 + 4)
