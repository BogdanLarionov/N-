const a = prompt("Укажите первое число: ");
const b = prompt("Укажите первое число: ");

console.log(a);
console.log(b);

console.log(a + b); // склеет строки
console.log(+a + +b); // преобразует в число и поскитает  введеггые значения
// ---------------------------------------------------------
// преобразует сразу введеннле число и посчитает
const c = +prompt("Укажите первое число: ");
const d = +prompt("Укажите первое число: ");
console.log(c + d);
// ---------------------------------------------------------
const i = prompt("Укажите первое число: ");
const k = prompt("Укажите первое число: ");
const i_number = +i;
const k_number = +k;
console.log(i_number + k_number);

// 12 + 45 = 57

const num_1 = 12;
const num_2 = 45;
const result = num_1 + num_2;
console.log(`${num_1} + ${num_2} = ${result}`);
---------------------------------------------------------
Интерполяция - это метод
const number_a = prompt("Укажите первое число: ");
const number_b = prompt("Укажите первое число: ");
const n_1 = +number_a;
const n_2 = +number_b;
console.log(`${number_a} + ${number_b} = ${n_1 + n_2}`);
console.log(`${number_a} - ${number_b} = ${n_1 - n_2}`);
console.log(`${number_a} * ${number_b} = ${n_1 * n_2}`);
console.log(`${number_a} / ${number_b} = ${n_1 / n_2}`);
---------------------------------------------------------

const a = +prompt("Укажите число:");

if (a > 0) {
  console.log(`Число ${a} положительное`); // Число 1 положительное
  console.log("Число" + " " + a + " " + "положительное"); // Число 1 положительное
} else {
  console.log(`Число ${a} отрицательное`);
  console.log("Число" + " " + a + " " + "отрицательное"); // Число -1 отрицательное
}
// ---------------------------------------------------------

// Получите два числа через prompt и сравните их друг с другом вывести сообщение
//<a> больше <b> на <разница между a и b>

const n_1 = +prompt("Число 1");
const n_2 = +prompt("Число 2");

if (n_1 > n_2) {
  console.log(`${n_1} больше   ${n_2}  на ${n_1 - n_2}`);
} else {
  console.log(`${n_2} больше  ${n_1} на ${n_2 - n_1}`);
}

// /n перенос строки

// если они равны
const n_1 = +prompt("Число 1");
const n_2 = +prompt("Число 2");

if (n_1 > n_2) {
  console.log(`${n_1} больше   ${n_2}  на ${n_1 - n_2}`);
} else if (n_1 < n_2) {
  console.log(`${n_2} больше  ${n_1} на ${n_2 - n_1}`);
} else {
  console.log("Они равны!");
}
