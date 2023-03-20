// СВОЙСТВА

let string = "Larionov Bogdan";
console.log(string.length); // 15 length - считает длину строки
console.log(string[0]); // L

// массив
arr = [1, 2, 3, 4, 5, "hello"];
console.log(arr.length); // 6 считает длину массива
console.log(arr[5]); // hello
console.log(arr["4"]); // 5

// Есть строка, мы не знаем сколько в ней символов. Вывести в консоль последний символ.
let long_string = "lLorem ipsum dolor sit, lLorem ipsum dolor sit";
let index = long_string.length - 1; // индекс последнего массива
console.log(long_string[index]); // t


// ------------------------------------------------------------------------------------------
let long_string = "lLorem ipsum dolor sit, lLorem ipsum dolor sit";
console.log(long_string[long_string.length - 1]); // t
let index = long_string.length - 1;
console.log(long_string[index]);  // t
// ------------------------------------------------------------------------------------------
//МЕТОДЫ

let str = "hello world";
console.log(str.toUpperCase()); // HELLO WORLD

let str2 = "HELLO WORLD";
console.log(str2.toLowerCase()); // hello world

str.length; // свойство (без скобок)
str.toLowerCase(); // метод (скобки) - функция

//trim() обрезает лишние пробелы по бокам
let str1 = "    hello   ";
console.log(str1); //           hello
console.log(str1.trim()); // helo
