// Задан массив:
// let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];
arr.unshift(67);
console.log(arr); // [67,137, 5, 84, 299, 777, 500, 1, 8, 17]

arr.push(56);
console.log(arr); // [67,137, 5, 84, 299, 777, 500, 1, 8, 17, 56]

// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.
let arr_less_than_100 = arr.filter((elem) => elem < 100);
console.log(arr_less_than_100); // [67, 5, 84, 1, 8, 17, 56];

// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.
arr_ends_on_7 = arr.filter((elem) => elem % 10 === 7);
console.log(arr_ends_on_7); // [ 67, 137, 777, 17 ]

// 4. Найдите сумму чисел, которые меньше 100.
let sum = arr
  .filter((elem) => elem < 100)
  .reduce((total, elem) => total + elem);
console.log(sum); // 238

let sum1 = arr_less_than_100.reduce((total, elem) => total + elem);
console.log(sum1); // 238

let sum2 = arr.reduce((total, el) => {
  if (el < 100) {
    total += el;
  }
  return total;
}); // 238

// 5. Найдите сумму чисел, которые заканчиваются на 7.
let sum3 = arr
  .filter((elem) => elem % 10 === 7)
  .reduce((total, elem) => total + elem);
console.log(sum3); // 998
