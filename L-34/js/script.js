// ряд методов массива

// forEach() - переберает элементы массива и выполняет с ними callback функцию

// map() - переберает элементы массива и выполняет с ними callback функцию
// то, что callback функцию возвращает попадает в новый массив

// filter() - переберает элементы массива и выполняет с ними callback функцию те элементы, с которыми функция вернула true остаются в итоговом массиве, а иные отбрасываются

// find() - возвращает первое значение в массиве, которое при вызове callback возвразает true

// reduce() -получает callback функцию, которая получает результат предидущкго вызова callback и следующий элемент из массива

// Задача:

// вывести эти числа в консоль (по одному)
const arr = [12, 4, 32, 45, 6, 43, 23];

arr.forEach((element) => {
  console.log(element);
});

// 12
// 4
// 32
// 45
// 6
// 43
// 23

// Задача:

// вывести в консоль  только четные числа
// 1.1
const arr = [12, 4, 32, 45, 6, 43, 23];

arr.forEach((elem) => {
  if (elem % 2 === 0) {
    console.log(elem);
  }
});

// 1.2
const arr = [12, 4, 32, 45, 6, 43, 23];

arr.filter((elem) => elem % 2 === 0).forEach((elem) => console.log(elem));
// 12;
// 4;
// 32;
// 6;

// написать программу, которая формирует новый массив из квадратов чисел массива arr

const arr = [12, 4, 32, 45, 6, 43, 23];
console.log(arr.map((elem) => elem ** 2));

// [144, 16, 1024, 2025, 36, 1849, 529];

// написать программу, которая формирует новый массив из квадратов только четных чисел массива arr (нечетные числа мы отбрасываем)

const arr = [12, 4, 32, 45, 6, 43, 23];
const result = arr.filter((elem) => elem % 2 === 0).map((elem) => elem ** 2);

console.log(result); // [ 144, 16, 1024, 36 ]

// Задача:
// написать программу, которая формирует из массива со строками массив с их длинами
// [9, 7, 6, 4]

const arr = ["велостпед", "самокат", "ролики", "лыжи"];
const result = arr.map((elem) => elem.length);
console.log(result); // [ 9, 7, 6, 4 ]
// ------------------------------------------------------------------
// Задача:
// написать программу, которая формирует из массива со строками массив
//  c объектоми, каждый объект состоит из свойства word(само слово) и length(длина слова)

// [
//   {
//     word: "велостпед",
//      length: 9
//   },

//  {
//     word: "велостпед",
//      length: 7
//   },
// ];

// метод 1

const arr = ["велостпед", "самокат", "ролики", "лыжи"];

console.log(
  arr.map((elem) => ({
    word: elem,
    length: elem.length,
  }))
);

// метод 2

const arr = ["велостпед", "самокат", "ролики", "лыжи"];

console.log(
  arr.map((elem) => {
    return {
      word: elem,
      length: elem.length,
    };
  })
);

// метод 3

const arr = ["велостпед", "самокат", "ролики", "лыжи"];

const result = arr.map((elem) => ({
  word: elem,
  length: elem.length,
}));

console.log(result);

// [
//   { word: "велостпед", length: 9 },
//   { word: "самокат", length: 7 },
//   { word: "ролики", length: 6 },
//   { word: "лыжи", length: 4 },
// ];
// ------------------------------------------------------------------

// необходимо сформировать массив из названий (word)

const array = [
  {
    word: "велостпед",
    length: 9,
  },
  {
    word: "самокат",
    length: 7,
  },
  {
    word: "ролики",
    length: 6,
  },
  {
    word: "лыжи",
    length: 4,
  },
];

const reuslr = array.map((elem) => elem.word);
console.log(reuslr); //[ 'велостпед', 'самокат', 'ролики', 'лыжи' ]

// 2
console.log(array.map((elem) => elem.word));

// 3
console.log(
  array.map((elem) => ({
    id: elem.id,
    word: elem.word,
  }))
);

// [
//   { id: undefined, word: "велостпед" },
//   { id: undefined, word: "самокат" },
//   { id: undefined, word: "ролики" },
//   { id: undefined, word: "лыжи" },
// ];

// 4
console.log(
  array.map((elem) => {
    const { id, word } = elem;

    return {
      id: id,
      word: word,
    };
  })
);

// [
//   { id: undefined, word: "велостпед" },
//   { id: undefined, word: "самокат" },
//   { id: undefined, word: "ролики" },
//   { id: undefined, word: "лыжи" },
// ];

// 5
console.log(
  array.map((elem) => {
    const { id, word } = elem;

    return { id, word };
  })
);

// [
//   { id: undefined, word: "велостпед" },
//   { id: undefined, word: "самокат" },
//   { id: undefined, word: "ролики" },
//   { id: undefined, word: "лыжи" },
// ];

console.log(
  array.map(({ id, word }) => {
    return { id, word };
  })
);

// [
//   { id: undefined, word: "велостпед" },
//   { id: undefined, word: "самокат" },
//   { id: undefined, word: "ролики" },
//   { id: undefined, word: "лыжи" },
// ];
