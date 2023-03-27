// reduce - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// reduce - часто пользуются когда нужно найти сумму массива, еще формируют сумму всей карзины!

// .reduce() - служит для того, что мы получили какое-то финальное значение, совершив итерацию по массиву. Возвращает финальное занчение, число.

//Найти сумму чисел в массиве
// цикл for
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 15

//Найти сумму чисел в массиве
// .reduce() -  Возвращает финальное занчение, число.

let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((total, el) => {
  return total + el;
}, 0);
console.log(result); // 15
// ---------------------------------------------------
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((total, el) => total + el, 0);
console.log(result); // 15

// C 0 в initialValue
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((total, el) => total + el);
console.log(result); // 15

// без 0 в initialValue
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15
// ---------------------------------------------------

// Дан массив
//Найти среднеарифмитическое всех элементов массиов(сумма деленная на общее количество)
// (3 + 6 + 7 + 1) / 4 = 4.25
let nums = [3, 6, 7, 1];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i] / nums.length;
}
console.log(sum); // 4.25;

let nums = [3, 6, 7, 1];
let result = nums.reduce((total, el) => (total += el / nums.length), 0);
console.log(result); // 4.25

let nums = [3, 6, 7, 1];
let result = nums.reduce((total, el) => {
  return (total += el / nums.length);
}, 0);
console.log(result); // 4.25

let nums = [3, 6, 7, 1];
let sum = nums.reduce((total, elem) => total + elem) / nums.length;
console.log(sum); // 4.25

let nums = [3, 6, 7, 1];
let sum = nums.reduce((total, elem) => total + elem); // 17
console.log(sum / nums.length); // 4.25
// ---------------------------------------------------
// 0 + 3 = 3
// 3 + 6 = 9
// 9 + 7 = 16
// 16 + 1 = 17
// 17 / 4 = 4.25
// console.log(17 / 4); //4.25
