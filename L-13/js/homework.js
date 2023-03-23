// ЗАДАЧА 1
// Дан массив с числами.
// let arr = [1, -6, 4, 0, 9, -5, 16];

// Создайте новый массив, состоящий только из отрицательных чисел.
// filter()
let arr = [1, -6, 4, 0, 9, -5, 16];
let newArr = arr.filter((elem) => elem < 0);
console.log(newArr); // [ -6, -5 ]

// for()
let array = [1, -6, 4, 0, 9, -5, 16];
let arr_negativ = [];
let arr_positive = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    arr_negativ.push(array[i]);
  } else {
    arr_positive.push(array[i]);
  }
}
console.log(arr_negativ); // [ -6, -5 ]
console.log(arr_positive); // [ 1, 4, 0, 9, 16 ]

// ternar operator
let array = [1, -6, 4, 0, 9, -5, 16];
let arr_negativ = [];
let arr_positive = [];
for (let i = 0; i < array.length; i++) {
  array[i] < 0 ? arr_negativ.push(array[i]) : arr_positive.push(array[i]);
}
console.log(arr_negativ); // [ -6, -5 ]
console.log(arr_positive); // [ 1, 4, 0, 9, 16 ]

// forEach()
let array = [1, -6, 4, 0, 9, -5, 16];
let arr_negativ = [];
let arr_positive = [];
array.forEach((elem) => {
  if (elem < 0) {
    arr_negativ.push(elem);
  } else {
    arr_positive.push(elem);
  }
});
console.log(arr_negativ);
console.log(arr_positive);

// Создайте новый массив, состоящий только из четных чисел.

let arr = [1, -6, 4, 0, 9, -5, 16];
let positive_arr = arr.filter((elem) => elem % 2 === 0 && elem !== 0);
console.log(positive_arr); // [[ -6, 4, 16 ]

// Напишите программу, высчитывающую количество отрицательных чисел в этом массиве.

// ЗАДАЧА 2.1
// Дан массив с числами.
let arr2 = [1, -6, 4, 0, 9, -5, 16, -3];
let arr_new = arr2.filter((elem) => elem < 0);
console.log(arr_new.length); // 3
// forEach()
let arr2 = [1, -6, 4, 0, 9, -5, 16, -3];
let newArr = [];
arr2.forEach((elem) => {
  if (elem < 0) {
    newArr.push(elem);
  }
});
console.log(newArr.length); // 3

// ЗАДАЧА 2.2
// Дан массив с числами.
// Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел.
let arr2 = [1, -6, 4, 0, 9, -5, 16, -3];
let ans = arr2.filter((elem) => elem > 0).map((elem) => Math.sqrt(elem));
console.log(ans);

// ЗАДАЧА 3
// Дан массив из разных типов данных.
// Необходимо сформировать массив из чисел (если значение не число, то подставить -1)

let arr3 = [8, "hello", true, false, "bye", 122, undefined, 15];
let newArr3 = arr3.map((elem) => {
  if (typeof elem !== "number") {
    return -1;
  } else {
    return elem;
  }
});
console.log(newArr3); // 8, -1, -1, -1, -1, 122, -1, 15];

let arr3 = [8, "hello", true, false, "bye", 122, undefined, 15];
let new_arr = arr3.map((elem) => (typeof elem === "number" ? elem : -1));
console.log(new_arr); // 8, -1, -1, -1, -1, 122, -1, 15];

// ЗАДАЧА 4
// двухмерный массив
// Дан массив из массивов. Вложенные массивы хранят в себе данные о пользователе (имя, фамилия и активность).
// Напишите filter, который оставляет только активных пользователей (true).
// Добавьте map, который в отфильтрованном списке преобразует вложенные массивы в строки.
// Результат: ['Максим Грибов', 'Антон Куликов', 'Ольга Петрова']

let arr4 = [
  ["Максим", "Грибов", true],
  ["Антон", "Куликов", true],
  ["Светлана", "Иванова", false],
  ["Ольга", "Петрова", true],
  ["Сидр", "Сидоров", false],
];

// let arr_active_users = arr4.filter((elem) => (elem[2] === true ? elem : ""));
let arr_active_users = arr4
  .filter((elem) => elem[2] === true)
  .map((elem) => `${elem[0]} ${elem[1]}`);
console.log(arr_active_users); // ["Максим Грибов", "Антон Куликов", "Ольга Петрова"];

// [
//   ["Максим", "Грибов", true],
//   ["Антон", "Куликов", true],
//   ["Ольга", "Петрова", true],
// ];

let arr4 = [
  ["Максим", "Грибов", true],
  ["Антон", "Куликов", true],
  ["Светлана", "Иванова", false],
  ["Ольга", "Петрова", true],
  ["Сидр", "Сидоров", false],
];

let aa = arr4.filter((elem) => {
  for (let i = 0; i < arr4.length; i++) {
    if (elem[i] === true) {
      return true;
    }
  }
});
console.log(aa);
// этот метод работае медленней, потомучто переберает по всем элементам масива
