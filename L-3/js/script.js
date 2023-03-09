const age = 29;
const name = "Bogdan";
const is_teacher = true;

console.log(age); // 29
console.log(name); // Bogdan
console.log(is_teacher); // true
// typeof - возврощает тип значение
console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof is_teacher); // boolean
// --------------------------------------------

const name = "Bogdan";
const lastname = "Larionov";
const fullname = name + " " + lastname;
console.log(fullname); // Bogdan Larionov
console.log(name + " " + lastname); // Bogdan Larionov
// --------------------------------------------

// Конкатенация строк

const red = 134;
const green = 124;
const blue = 56;

const grbColors =
  "Red:" + " " + red + " " + "Green:" + green + " " + "Blue:" + " " + blue;
// Red: 134 Green:124 Blue: 56
console.log(grbColors); // 134 124 56
// --------------------------------------------

// Интерполяция строк
console.log(`Red:${red}, Green: ${green}, Blue: ${blue}`); // Red: 134 Green:124 Blue: 56
// --------------------------------------------------------------

// Добрый день <Имя> <Фамилия>! <кол-во минут > минут.
const name = "Bogdan";
const lastname = "Larionov";
const age = 32;
// 32 * 365 * 24 * 60;
console.log(
  `Добрый день ${name} ${lastname} ваш возрост в минутах ${
    age * 365 * 24 * 60
  } минут`
);
// --------------------------------------------
const value_1 = 122;
const value_2 = 25;

console.log(value_1 + value_2); // 147
console.log(value_1 - value_2); // 97
console.log(value_1 * value_2); // 3050
console.log(value_1 / value_2); // 4.88
console.log(value_1 % value_2); // 22  'Остаток от деления'

// 65 яиц
// 1 коробка - 7 яйца
// 9 коробок = 63 яйца
// 65 % 7 = 2 "Остаток от деления,мы поделили 65 на 7 и осталось 2"

// --------------------------------------------

const val_1 = 12;
console.log(String(val_1)); // 12
console.log(typeof String(val_1)); // string

// string
const val_2 = "12";
console.log(typeof val_2); // string
// преобразовали строку в цифру
console.log(typeof +val_2); // number
// склеело строки
console.log(val_2 + 3); // 123
// преобразовали строку в цифру
console.log(+val_2 + 3); // 123
console.log(typeof +val_2 + 3); // number 123
// --------------------------------------------
// NaN - number
console.log(typeof NaN); // number

let result = ("b" + "a" + +"c").toLowerCase();
console.log(result); // banan

// конкантинация преобразовали в плюс
let res = +"c";
console.log(res); // NaN
// --------------------------------------------
