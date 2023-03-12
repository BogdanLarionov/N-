// Коллеги, скидываю вам задачки для самостоятельной работы по прошедшему занятию.
// 1. Создайте переменную user и присвойте ей значение: '   Ivan Ivanov    '. Выведите переменную user в консоль, но без лишних пробелов по краям.
const user = "   Ivan Ivanov    ";
console.log(user.trim()); // Ivan Ivanov

// 2. Напишите программу, которая выводит в консоль рандомное/случайное число от 0 до 1 и округляет его до третьего знака после точки. Воспользуйтесь методом toFixed().

// Короткий способ
const number = Math.random().toFixed(3);
console.log(number); // 0.812

// Длинный способ
const step_1 = Math.random();
console.log(step_1); // 0.4374861459766435
const step_2 = step_1.toFixed(3); // метод .toFixed() возвращает строку!
console.log(typeof +step_2); // 0.437

// 3. Выведите на экран первую и последнюю буквы предложения, записанного в константу text (текст строки произвольный), в следующем формате:
// First: <первая буква строки>
// Last: <последняя буква строки>

const text = "текст строки произвольный";
const lastLatter = text.length - 1;
console.log(
  `First: ${text[0].toUpperCase()}
  Last: ${text[lastLatter].toUpperCase()}`
); // First: Т Last: Й

console.log(`First: ${text[0].toUpperCase()} \nLast: ${text[text.length - 1]}`); // First: Т Last: Й
// \n - перенеос строки!
