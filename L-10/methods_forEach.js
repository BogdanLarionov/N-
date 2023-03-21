// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)
// -----------------------------------------------
// решегие задачи через for
let age = [40, 45, 53, 23, 12, 7];
for (let i = 0; i < age.length; i++) {
  if (age[i] >= 18) {
    console.log(age[i]); // 40, 45, 53, 23
  }
}

// решегие задачи через forEach
let age = [40, 45, 53, 23, 12, 7];
age.forEach((element) => {
  if (element >= 18) {
    console.log(element); // 40, 45, 53, 23
  }
});

// age.forEach(element => {})

let age = [40, 45, 53, 23, 12, 7];
age.forEach((el) => console.log(el / 2)); // 20, 22.5, 26.5, 11.5, 6, 3.5
age.forEach((el) => console.log(el * 2)); // 80, 90, 106, 46, 24, 14
age.forEach((el) => console.log(el + 2)); // 42, 47, 55, 25, 14, 9

// в данном примерре forEach() это функция вышего порядка. (el) => console.log(el + 2) это callback function переданна в качестве аргумента
// ---------
let age = [40, 45, 53, 23, 12, 7];
let arr_age = [];
age.forEach((el) => arr_age.push(el));
console.log(arr_age); // [40, 45, 53, 23, 12, 7];
// ---------
let age = [40, 45, 53, 23, 12, 7];
let arr_age = [];
age.forEach((el) => arr_age.push(el / 2));
console.log(age); // [ 40, 45, 53, 23, 12, 7 ]
console.log(arr_age); // [ 20, 22.5, 26.5, 11.5, 6, 3.5 ]
// ---------
let age = [40, 45, 53, 23, 12, 7];
let arr_age = [];
age.forEach((el) => arr_age.push(el + 2));
console.log(age); // [ 40, 45, 53, 23, 12, 7 ]
console.log(arr_age); //[ 42, 47, 55, 25, 14, 9 ]
// -----------------------------------------------

let age = [40, 45, 53, 23, 12, 7];
age.forEach((element) => {
  if (element <= 18) {
    console.log(element); // 12,7
  }
});
// -----------------------------------------------
let age = [40, 45, 53, 23, 12, 7];
let new_age = [];
for (let i = 0; i < age.length; i++) {
  if (age[i] >= 18) {
    new_age.push(age[i]);
  }
}
console.log(age); // [ 40, 45, 53, 23, 12, 7 ]
console.log(new_age); // [ 40, 45, 53, 23 ]
