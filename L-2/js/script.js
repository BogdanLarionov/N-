let string = "7";
console.log(typeof string); // string
// --------------------------------------
let string = "7";
let number = +string;
console.log(typeof number); // number
// --------------------------------------
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
// Обьект Math.pow()
let a = Math.pow(10, 3);
console.log(a); // 1000
// --------------------------------------
let b = Math.abs(5);
let c = Math.abs(-5);
console.log(b); // 5
console.log(c); // 5
// --------------------------------------
let d = Math.ceil(4.33);
console.log(d); // 5 - округляет до первого верхнего значения
// --------------------------------------
let e = Math.floor(4.33);
console.log(e); // 4 - округляет до первого нижнего значения
// --------------------------------------
let f = Math.round(4.33);
console.log(f); // 4 - округляет по правилам математики
// --------------------------------------
let min = Math.min(5, 34, -100, 56, 777);
console.log(min); // -100
// --------------------------------------
let max = Math.max(5, 34, -100, 56, 777);
console.log(max); // 777
// --------------------------------------
let random = Math.random(); // возвращает случайное дробное число от 0 до 1
console.log(random); //  случайное дробное число 0.3843906770262657
// --------------------------------------
//Напишите программу, которая выводит случайное число от 0 до 10
let step_1 = Math.random(); // выводит случайное число от 0 до 1
console.log(step_1); // пример: 0.6999247203808283
let step_2 = step_1 * 10; // случайное число из step_1 умножаем на 10
console.log(step_2); // пример: 6.999247203808283
let step_3 = Math.round(step_2); // округляет число из step_2
console.log(step_3); // пример: 7
// --------------------------------------
let ok = Math.random() + 1; // увеличили деапозон на + 1
console.log(ok);
// --------------------------------------
let random_num1 = Math.round(Math.random() * 10); // округлили от 0 до 10
console.log(random_num1);
let random_num2 = Math.round(Math.random() * 10 + 1); // округлили от 0 до 10 и увеличили на 1 (0 - 11)
console.log(random_num2);
let random_num3 = Math.round(Math.random() * 10 + 2); // округлили от 0 до 10 и увеличили на 2 (0 - 12)
console.log(random_num3);
// Найти диапазон от 1 до 10
let random_num4 = Math.round(Math.random() * 9 + 1); // округлили от 1 до 10
console.log(random_num4);
// --------------------------------------
//Напишите программу, которая выводит случайное целое число от 15 до 25
// способ_1
let rand1 = Math.round(Math.random() * 10 + 15); // 0 - 10 => 15 - 25
console.log(rand1); // 15 - 25
// способ_2
let rand2 = 15 + Math.round(Math.random() * 10); // 0 - 10 => 15 - 25
console.log(rand2); // 15 - 25
// --------------------------------------
let rand3 = Math.floor(Math.random() * 11);
console.log(rand3); // 0 - 10
