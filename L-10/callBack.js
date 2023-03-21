// Коллбэк (callback) - это функция, переданная в другую функцию в качестве аргумента
// Функция высшего порядка - это функция, внутрь которой передана другая функция (коллбэк)

const multThree = () => {
  return 3 * 2;
};

const multFour = () => {
  return 4 * 2;
};
const multFive = () => {
  return 5 * 2;
};

// шаблон
const multNumber = (num) => {
  return num * 2;
};
console.log(multNumber(6)); // 12
console.log(multNumber(7)); // 14
console.log(multNumber(8)); // 16
// ---------------------------------------------------------
const nums = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];
const divedeNums = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] / 2);
  }
  return array;
};
console.log(divedeNums(nums)); // [ 0.5, 1, 1.5, 2, 2.5 ]
console.log(divedeNums(nums2)); // [ 5, 10, 15, 20, 25 ]

// ---------------------------------------------------------
const nums = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];
const multNums = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(arr[i] * 2);
  }
  return array;
};
console.log(multNums(nums)); // [ 2, 4, 6, 8, 10 ]
console.log(multNums(nums2)); // [ 20, 40, 60, 80, 100 ]
// ---------------------------------------------------------
const nums = [1, 2, 3, 4, 5];
const changeNums = (arr, func) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    array.push(func(arr[i])); // передаем инструкцию и работаем по инструкции с каждым элементом массива
  }
  return array;
};

const divide = (num) => num / 2;
const mult = (num) => num * 2;
const plus = (num) => num + 2;
const change = (num) => (num = 0);

console.log(changeNums(nums, divide)); // [ 0.5, 1, 1.5, 2, 2.5 ]
console.log(changeNums(nums, mult)); // [ 2, 4, 6, 8, 10 ]
console.log(changeNums(nums, plus)); // [ 3, 4, 5, 6, 7 ]
console.log(changeNums(nums, change)); // [ 0, 0, 0, 0, 0 ]
