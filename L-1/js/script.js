// number_of_workers - snake_case
// numberOfWorkers - camalCase
// number-of-workers - kebab-case
// numberofworkers - очень плохой способ

// let number = 5; //число
// let greeting = 'Hello'; //строка
// let firstname = "Oleg"; //строка

// '', "" - разницы нет
// `` - можно включать переменные

// let a = 5;
// let b = 7;
// console.log(a + b); // 12

// let greeting = 'HI'; //строка
// let firstname = "Oleg"; //строка
// let city = `Berlin`; //строка

// console.log('Приветствие через конкатенацию: ' + greeting + ' ' + firstname); //конкатенация
// console.log(`Приветствие через интерполяцию: ${greeting} ${firstname}`); //интерполяция

// let a = 5;
// let b = 'hello';

// console.log(typeof a); //number
// console.log(typeof b); //string

let a = 7 + "7"; // => '7' + '7' = '77'
let b = 7 - "7"; // => 7 - 7 = 0

let c = +"100h";
console.log(c); //NaN - not a number
console.log(typeof c); //number
