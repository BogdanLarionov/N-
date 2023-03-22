// методы массива

// callback function

const lst = [12, 4, 32, 45, 43, 23];
lst.forEach((elem) => console.log(elem)); // 12, 4, 32, 45, 43, 23

const lst = [12, 4, 32, 45, 43, 23];
function forEach(lst, callback) {
  for (let i = 0; i < lst.length; i++) {
    callback(lst[i], i, lst);
  }
}
forEach(lst, (elem) => console.log(elem)); // 12, 4, 32, 45, 43, 23
forEach(lst, (elem) => console.log(elem ** 2)); //

// написать forEach, который выводит только четные числа в консоль
const lst = [12, 4, 32, 45, 43, 23];
lst.forEach((elem) => {
  if (elem % 2 === 0) {
    console.log(elem); // 12, 4, 32
  }
});

const lst = [12, 4, 32, 45, 43, 23];
let new_arr = [];
lst.forEach((elem) => {
  if (elem % 2 === 0) {
    new_arr.push(elem);
  }
});
console.log(new_arr); // [ 12, 4, 32 ]
// --------------------------------------------------------------------------------------
const lst = [12, 4, 32, 45, 43, 23];
let even = [];
let odd = [];
lst.forEach((elem) => (elem % 2 === 0 ? even.push(elem) : odd.push(elem)));
console.log(even); // [ 12, 4, 32 ]
console.log(odd); // [ 45, 43, 23 ]
// --------------------------------------------------------------------------------------
// Написать forEach который выводит в консоль наибольшее значение из массива
const lst = [12, 4, 32, 45, 43, 23];
let result = 0;
lst.forEach((elem) => {
  if (elem > result) {
    result = elem;
  }
});
console.log(result); // 45
// --------------------------------------------------------------------------------------
const lst = [-12, -4, -32, -45, -43, -23];
let result = lst[0];
lst.forEach((elem) => {
  if (elem > result) {
    result = elem;
  }
});
console.log(result); // -4
// --------------------------------------------------------------------------------------
const lst = [12, 4, 32, 45, 43, 23];
const res = lst.map((elem) => elem ** 2);
console.log(res); // [ 144, 16, 1024, 2025, 1849, 529 ]

const lst = [12, 4, 32, 45, 43, 23];
let new_lst = [];
for (let i = 0; i < lst.length; i++) {
  new_lst.push(lst[i] ** 2);
}

console.log(new_lst); // [ 144, 16, 1024, 2025, 1849, 529 ]
// --------------------------------------------------------------------------------------
// метод передает каждые 2 сек Hello
setInterval(() => {
  console.log("Hello");
}, 200);
// --------------------------------------------------------------------------------------
//Написать метод map(), кторый возвращает массив, в котором все отрицательные значения преобразованы в положительные
const lst = [-12, 4, -32, 45, 43, -23];
let res = lst.map((elem) => {
  if (elem < 0) {
    console.log(-elem);
  } else {
    console.log(elem);
  }
});

const lst = [-12, 4, -32, 45, 43, -23];
let res = lst.map((elem) => elem);
// --------------------------------------------------------------------------------------
// написать функцию, которая получает число и возвращает положительное число

// function(12) -> 12
// function(-12) -> 12

function getNum(num = -12) {
  if (num < 0) {
    return -num;
  }
}
console.log(getNum()); // 12

let res = (num = -12) => {
  if (num < 0) {
    return -num;
  }
};
console.log(res()); // 12

let res = (num = -12) => (num < 0 ? -num : num);
console.log(res()); // 12
console.log(res(-234234)); // 234234
console.log(res(234234)); // 234234

function getNum(value) {
  if (value < 0) {
    // value *= -1;
    value = -value;
  }
  return value;
}
console.log(getNum(-12)); // 12
console.log(getNum(12)); // 12

let getNum = (value) => (value < 0 ? (value = -value) : value);
console.log(getNum(-12)); // 12
console.log(getNum(12)); // 12

let getNum = (value) => (value < 0 ? (value *= -1) : value);
console.log(getNum(-12)); // 12
console.log(getNum(12)); // 12

const lst = [-12, 4, -32, 45, 43, -23];
let ne = lst.map((elem) => (elem < 0 ? -elem : elem));
console.log(ne); // [ 12, 4, 32, 45, 43, 23 ]

const lst = [-12, 4, -32, 45, 43, -23];
function getNum(value) {
  if (value < 0) {
    value *= -1;
  }
  return value;
}
console.log(lst.map(getNum)); // [ 12, 4, 32, 45, 43, 23 ]

let getNum = (value) => (value *= -1);
console.log(getNum(-23)); // 23

let getNum = (value) => (value = -value);
console.log(getNum(-23)); // 23

let getNum2 = (val) => Math.abs(val);
console.log(getNum2(-213)); // 213

// ----------------------------------------------------------------------------

// написать map() который преобразовывает нечетные числа в четные (преобразует единицу)
// 1) написать функцию, которая преобразует нечетное в четное
// 2) вставить функцию map()
let arr = [12, 4, 32, 45, 43, 23];
let newArr = arr.map((elem) => {
  if (elem % 2 !== 0) {
    return (elem += 1);
  } else {
    return elem;
  }
});
console.log(newArr); // [ 12, 4, 32, 46, 44, 24 ]

let arr = [12, 4, 32, 45, 43, 23];
let newArr = arr.map((elem) => (elem % 2 !== 0 ? (elem += 1) : elem));
console.log(newArr); // [ 12, 4, 32, 46, 44, 24 ]
// ------------------------------------------------------------------------
let arr_new = [-12, 4, -32, 45, -43, 23];
console.log(arr_new.filter((elem) => elem > 0)); // [ 4, 45, 23 ]
// ------------------------------------------------------------------------
// сформировать массив, который состоит из слов не длинее 6 симвалов
let word = ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра"];
let word_return = word.filter((elem) => elem.length <= 6);
console.log(word_return); // [ 'ролики', 'стол', 'люстра' ]

// ------------------------------------------------------------------------
// спред оператор - добавили в массив
let words = ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра"];
const add = (word) => {
  words = [...words, word];
};
add("стул");
console.log(words); // ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра", 'стул'];

// спред оператор - удалили в массив
let words = ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра"];
const del = (word) => (words = words.filter((elem) => elem !== word));
del("самокат");
console.log(words); // [ 'велосипед', 'ролики', 'телефон', 'стол', 'люстра' ]

//выводим информацию
let words = ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра"];
const read = () => words.forEach((elem) => console.log("Слово: " + elem));
read();
// Слово: велосипед; // Слово: самокат; // Слово: ролики; // Слово: телефон; // Слово: стол; // Слово: люстра;

// поиск по части фразы
let words = ["велосипед", "самокат", "ролики", "телефон", "стол", "люстра"];
const search = (substr) => words.filter((word) => word.startsWith(substr));
console.log(search("с")); // [ 'самокат', 'стол' ]

// callback function

startsWith;
