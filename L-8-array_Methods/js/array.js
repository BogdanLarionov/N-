// Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

// hello => h,e,l,l,o

// i <= str.length ===  i < str.length - 1;

const get_letter = (str) => {
  //   for (let i = 0; i < str.length; i++) {
  for (let i = 0; i <= str.length - 1; i++) {
    console.log(str[i]);
  }
};

get_letter("Hello"); // H,e,l,l,o

// Массив (Array)
let str = "Nelli";
let array = ["hello", 5, true, false, 23, "bue", str];
console.log(array); // [ 'hello', 5, true, false, 23, 'bue', 'Nelli' ]
console.log(str.length); // 5 - длина последнего элемента массива
console.log(array.length); // 7 - индекс последнего элемента
console.log(array.length - 1); // 6 ,length-1 индекс последнего элемента
console.log(array[0]); // hello
console.log(array[0].length); // 5 - длина первого элемнта массива
console.log(array[0][0]); // h - у массива взяли первый элемент, в нем взяли первую букву
// ------------------------------------------------------------------------------------------

// Найти длину последнего элемента массива. Заранее не известна длина массива.

let str = "hello, world!!!!!";
let elements = [
  "hello",
  5,
  true,
  false,
  23,
  "bye",
  76,
  true,
  undefined,
  null,
  str,
]; // 0 - 10
console.log(elements.length); // количество жлементов массива 11
console.log(elements.length - 1); // === elements [10] // индекс последнего элемента массива 10
console.log(elements[elements.length - 1]); // из массива выводим последний элеиент. elements - str = hello, world!!!!!
console.log(elements[elements.length - 1][str.length - 1]); // последний элемент последнего индекска массива
console.log(elements[elements.length - 1].length); // 17, длина последнего элемента последнего индекска массива
let last_elem = elements[elements.length - 1];
// ------------------------------------------------------------------------------------------
let str = "hello, world!!!!!";
let elements = ["hello", 5, true, false, str];
let last_elem = elements[elements.length - 1];
console.log(last_elem[last_elem.length - 1]); // '!' последний элемент последнего индекска массива
// ------------------------------------------------------------------------------------------

let text = "good morning";
console.log(text[0]); // g , первый элемент строки

let arr = [1, 2, 3, 4, 5, "hello"];
console.log(arr[0]); // 1, первый элемент строки
console.log(arr.length - 1); // 5 длина массива
console.log(arr[arr.length - 1]); // hello, последний элемент строки
console.log(arr[arr.length - 1].length - 1); // 4, длина последнего элемент массива
console.log(arr[arr.length - 1].length); // 5, длина последнего элемент массива
console.log(arr.length[arr.length - 1]); // 5, длина последнего элемент массива

// длина массива - 1 = индекс последнего элемента

/*
Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
Если входной массив пуст, функция возвращает null.
Если есть несколько одинаковых по длине элементов (самый длинный) - функция возвращает первый из этих элементов.
Для начала пропишите аргументы функции.  
Пример: [ 'one', 'two', 'three' ] => 'three'
*/

// название функции чаще всего пишут camelCase

const get_longest_string = (array) => {
  if (array.length === 0) {
    return null;
  }

  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i].length > result.length) {
      result = array[i];
    }
  }
  return result;
};
console.log(get_longest_string(["one", "two", "three", "12345"])); // three
console.log(get_longest_string([])); // null

// get_longest_string();

// result = 'one'
// result = '11111111111'
// result = 'djjdjdjdjdjdjdjdjdjd'
