// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)

// .filter() - возращает новый массив со всеми элементами, прошедшими проверку!!!. Длина нового массива может быть меньше длины оригинального массива.

// .map() - возвращает новый массив с результатом вызова указанной функции для каждого элемента (изменяет каждый элемент). Длина нового массива всегда равна длине оригинального массива.

//forEach() нечего не возврощает а метод map() возврозает новый массив

// .reduce() -

// Тернарный оператор

// условие ? true : false

// -----------------------
// .filter()- если есть проверка что числа (< 100 ) то лучше исмользовать .filter()!

// Сформируйте новый массив с числами меньше 100. filter())
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_array = array.filter((element) => {
  return element < 100;
});
console.log(new_array); // [ 45, 65, 32, 1, 0, 7 ]

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_array = array.filter((element) => element < 100);
console.log(new_array); // [ 45, 65, 32, 1, 0, 7 ]
// -----------------------
// Сформируйте новый массив с именами длиннее 5 букв
let users = ["Ivan", "Victoria", "Oleg", "Elena", "Anton"];
let newUsers = users.filter((elem) => {
  return elem.length >= 5;
});

// let newUsers = users.filter((elem) => elem.length >= 5);

console.log(users); // ["Ivan", "Victoria", "Oleg", "Elena", "Anton"];
console.log(newUsers); // [ 'Victoria', 'Elena', 'Anton' ]

// ---------------------------------------------------------------------

// Дан массив из строк. Вывести только слова, длиннее 10 символов

// метод .filter()
let arr = ["hello", "bye", "good morning", "good evening", "good night"];
let newArr = arr.filter((elem) => elem.length >= 10);
console.log(newArr); // [ 'good morning', 'good evening', 'good night' ]

// цикл for
let arr = ["hello", "bye", "good morning", "good evening", "good night"];
let arrayNew = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length >= 10) {
    arrayNew.push(arr[i]);
  }
}
console.log(arrayNew); // [ 'good morning', 'good evening', 'good night' ]

// метод .forEach()
let arr = ["hello", "bye", "good morning", "good evening", "good night"];
let nArr = [];
arr.forEach((elem) => {
  if (elem.length >= 10) {
    nArr.push(elem);
  }
});
console.log(nArr); // [ 'good morning', 'good evening', 'good night' ]
// ---------------------------------------------------------------------
// Вернуть новый массив с каждым элементом, умноженным на 2 .map()
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let mult_on_2 = array.map((elem) => elem * 2);
let devide_on_2 = array.map((elem) => elem / 2);
console.log(mult_on_2); // [400, 90, 130, 1340, 704, 64, 2, 0, 14];
console.log(devide_on_2); // [100, 22.5, 32.5, 335, 176, 16, 0.5, 0, 3.5];
// ---------------------------------------------------------------------
// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100
let age = [23, 15, 18, 56, 43, 28];
let ageAdult = age.filter((elem) => elem >= 18);
console.log(age); // [23, 15, 18, 56, 43, 28];
console.log(ageAdult); // [ 23, 18, 56, 43, 28 ]
let ageChanged = age.map((elem) => (elem = 100));
console.log(ageChanged); // [ 100, 100, 100, 100, 100, 100 ]

// {
//   if (elem >= 18) {
//     // return 100;
//     return (elem = 100);
//   } else {
//     return elem;
//   }
// });
// console.log(ageChanged); // [ 100, 15, 100, 100, 100, 100 ]

// короткий способ
let age = [23, 15, 18, 56, 43, 28];
let ageAdult = age.filter((elem) => elem >= 18).map((elem) => (elem = 100));
console.log(ageAdult); // [ 100, 100, 100, 100, 100 ]
// ---------------------------------------------------------------------
// Сформировать массив, где несовершеннолетние заменены на 'child', а совершеннолетние на 'adult'
// Метод map()
let age = [23, 15, 18, 56, 43, 28];
let newage = age.map((elem) => {
  if (elem >= 18) {
    return "adult";
  } else {
    return "child";
  }
});
console.log(newage); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// Тернарный оператор
let age = [23, 15, 18, 56, 43, 28];
let newage = age.map((elem) => (elem >= 18 ? "adult" : "child"));
console.log(newage); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// метод filter()
let age = [23, 15, 18, 56, 43, 28];
let ageAdult = [];
age.filter((elem) => {
  if (elem >= 18) {
    ageAdult.push("adult");
  } else {
    ageAdult.push("child");
  }
});
console.log(ageAdult);

// цикл forEach
let age = [23, 15, 18, 56, 43, 28];
let newAge = [];
age.forEach((elem) => {
  if (elem >= 18) {
    newAge.push("adult");
  } else {
    newAge.push("child");
  }
});
console.log(newAge); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]

// цикл for
let age = [23, 15, 18, 56, 43, 28];
let newAge = [];
for (let i = 0; i < age.length; i++) {
  if (age[i] >= 18) {
    newAge.push("adult");
  } else {
    newAge.push("child");
  }
}
console.log(newAge); // [ 'adult', 'child', 'adult', 'adult', 'adult', 'adult' ]
// -------------------------------------
let age = [23, 15, 18, 56, 43, 28];
let newA = age.map((elem) => {
  if (elem % 2 === 0) {
    return "q";
  }
});
console.log(newA); //[ undefined, undefined, 'q', 'q', undefined, 'q' ]
// -------------------------------------

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7, 5];
let newArr = array.map((elem) => {
  if (elem > 100) {
    return ">100";
  } else {
    return "<100";
  }
});
console.log(newArr); // [">100","<100","<100",">100",">100","<100","<100","<100","<100","<100",];

// Тернарный оператор
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7, 5];
let newArr = array.map((elem) => (elem >= 100 ? ">100" : "<100"));
console.log(newArr); // [">100","<100","<100",">100",">100","<100","<100","<100","<100","<100",];
// -------------------------------------

// Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]

//forEach() нечего не возврощает а метод map() возврозает новый массив

// map()

// let arrNumbers = [3, 5, 8, 6, 3, 8];
let arrNumbers = [23, 15, 18, 56, 43, 28];
let newArrNumbers = arrNumbers.map((el) => el % 10); // возвразаем остаток деленный на 10
console.log(newArrNumbers); // [ 3, 5, 8, 6, 3, 8 ]

// forEach()
let arrNumbers = [23, 15, 18, 56, 43, 28];
let new_arr = [];
arrNumbers.forEach((elem) => new_arr.push(elem % 10)); // forEach() возвращает undefined поэтому мы push в новый масив!
console.log(new_arr); // [ 3, 5, 8, 6, 3, 8 ]
