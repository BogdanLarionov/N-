// Задан массив:
let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];

// Задачи:
// 1. Добавьте в начало массива число 53. Затем удалите из конца массива последние 2 числа. Далее решайте задачи с обновленным массивом.

arr.unshift(53); // Добавьте в начало массива число 53
console.log(arr);

arr.pop(); //Затем удалите из конца массива последние 2 числа
arr.pop();
console.log(arr); // [53, 8, 7, -30, 76, 53, 93, -3, 10, -15];

// короткая запись
arr.length = arr.length - 2; // [53, 8, 7, -30, 76, 53, 93, -3, 10, -15];
console.log(arr);

// 2. Сформируйте массив из положительных чисел меньше 50. Найдите сумму всех положительных чисел меньше 50.
// let new_arr = arr.filter((elem) => {
//   if (elem > 0 && elem < 50) {
//     return elem;
//   }
// });
// console.log(new_arr);  // [ 8, 7, 10 ]

let new_arr = arr
  .filter((elem) => elem > 0 && elem < 50)
  .reduce((acc, value) => acc + value);
console.log(new_arr); // 25

// 3. Сформируйте массив, состоящий только из положительных чисел, кончающихся на 3. Найдите сумму всех положительных чисел, кончающихся на 3.

let newArr = arr
  .filter((elem) => elem > 0 && elem % 10 === 3)
  .reduce((total, value) => total + value);
console.log(newArr); // 199

// 4. Сформируйте массив, в котором положительные числа заменены на строку '+', а отрицательные числа - на '-'
let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
let arrNew = arr.map((elem) => (elem >= 0 ? "+" : "-"));
console.log(arrNew); //  ["+", "+", "-", "+", "+", "+", "-", "+", "-", "+", "+"];

// forEach
let array = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
let new_arra = [];
array.forEach((elem) => {
  if (elem >= 0) {
    return new_arra.push("+");
  } else {
    return new_arra.push("-");
  }
});
console.log(new_arra); //  ["+", "+", "-", "+", "+", "+", "-", "+", "-", "+", "+"];

// for
let array = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
let new_arr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 0) {
    new_arr.push("+");
  } else {
    new_arr.push("-");
  }
}
console.log(new_arr); //  ["+", "+", "-", "+", "+", "+", "-", "+", "-", "+", "+"];
