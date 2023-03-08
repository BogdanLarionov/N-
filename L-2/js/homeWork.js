// Выведите в консоль результат деления числа 100 на 4.
let a = 100 / 4;
console.log(a); // 25

console.log(100 / 4); // 25
// ----------------------
// Реализуйте программу, которая вычисляет и выводит на экран значение выражения: 8 / 2 + 5 - -3 / 2
let b = 8 / 2 + 5 - -3 / 2;
console.log(b); // 10.5

console.log(8 / 2 + 5 - -3 / 2);
// ----------------------
// Выведите в консоль следующую фразу, используя конкатенацию: Lorem ipsum dolor sit amet
// конкатенацию - склеивание строк
let first_part = "Lorem ipsum";
let second_part = "dolor sit amet";

console.log(first_part + " " + second_part); // Lorem ipsum dolor sit amet
// ----------------------
// Выведите фразу из предыдущего задания в консоль, используя интерполяцию.
let first_part = "Lorem ipsum";
let second_part = "dolor sit amet";
console.log(`${first_part} ${second_part}`); // Lorem ipsum dolor sit amet
// ----------------------
// Создайте переменную number и присвойте ей значение 8. Затем переопределите значение - задайте новое значение 15. Выведите новое значение переменной в консоль.
let number = 8;
number = 15;
console.log(number); // 15
// ----------------------
// Создайте переменную sum, которая будет выполнять операцию возведения в квадрат числа 8. Выведите переменную sum в консоль.
let sum = 8 ** 2;
let sum1 = Math.pow(8, 2); // Math.pow() возводит в кводрат
console.log(sum); // 64
console.log(sum1); // 64
// ----------------------
// Создайте две переменные firstname и lastname. Присвойте им произвольные значения. Выведите в консоль строку в формате ‘Имя Фамилия’
let firstname = "Nelli";
let lastname = "Efremyan";
console.log(' " ' + firstname + " " + lastname + ' "  '); // "Nelli Efremyan"
console.log(`'${firstname} ${lastname}'`); // 'Nelli Efremyan'
