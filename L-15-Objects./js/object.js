let a = "hrllo"; // string
let b = 7; //number
let c = true; // boolean - true/false

// в js - undefined, null, number, string - это преметивный вид данных все их 7 в js!
// один не преметивный - object!

let object = {
  firstname: "Nelli", //   firstname:  - 'Ключь', "Nelli" - Значение,
  lastname: "Efremyan",
  age: 27,
  active: true,
};

console.log(object); // ввели обьект{ firstname: 'Nelli', lastname: 'Efremyan', age: 27, active: true }

// Cпособ через точку!!

console.log(object.firstname); // Вывели по ключю то что записанно в firstname -  Nelli
console.log(`Hello ${object.firstname}! you are ${object.age} years old`); // Hello Nelli! you are 27 years old

// Cпособ через квадратные скобки и ковычки!! Так редко используют

// 1. если ключ состоит из двух и более слов
let user = {
  first_name: "Nelli", //   first_name:  - 'Ключь', "Nelli" - Значение,
  age: 27,
};

console.log(`Hello ${user["first_name"]}! you are ${user["age"]} years old`); // Hello Nelli! you are 27 years old

let user = {
  "first name": "Nelli", //   "first name": разделенный Ключь, "Nelli" - Значение, тогда записавыется в каодратных скобках !!! |^
  age: 27,
};

console.log(`Hello ${user["first name"]}! you are ${user["age"]} years old`); // Hello Nelli! you are 27 years old

// 2. если ключ - это переменная

let user = {
  firstname: "Nelli", //   firstname:  - 'Ключь', "Nelli" - Значение,
  lastname: "Efremyan",
  age: 27,
  active: true,
};

let a = "firstname"; // в переменную положили ключ "firstname"

console.log(`Hello ${user[a]}! you are ${user["age"]} years old`); // Hello Nelli! you are 27 years old
// ===========================================================================

let arr = [1, "hello", true];
console.log(arr[1]); //hello

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },

  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },

  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },

  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
// вывести из 2 object в консоль
console.log(users[1]); // { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 }
console.log(users[1].salary); // 250
console.log(`Hello ${users[0].first_name}`); // Hello Ivan
console.log(`Hello ${users["user".length - 1].first_name}`); // Hello Denis

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль

users.forEach((elem) => console.log(elem));

//2. Пройдитесь по массиву с объектами циклом forEach и выведите в консоль значения first_name из каждого объекта

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },

  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },

  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },

  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

users.forEach((elem) => console.log(elem.first_name));

// 3. Добавить в конец массива объект со следующими значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

users.push({ first_name: "Anton", last_name: "Gribov", age: 36, salary: 1760 });
console.log(users); // добавили в конец массива!

// 4. Сформируйте массив из совершеннолетних пользователей (18+)
const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },

  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },

  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },

  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

const adult_users = users.filter((elem) => elem.age >= 18);
console.log(adult_users); // вернет всех кроме age 12 !

// 5. Получите из всех объектов значения last_name и сформируйте из этих фамилий массив.
// => ['Ivanov', 'Petrova', 'Alexandrova', 'Sokolov', 'Gribov']

const new_arr = users.map((elem) => elem.last_name);
console.log(new_arr); // [ 'Ivanov', 'Petrova', 'Alexandrova', 'Sokolov' ]

// 6. Сформируйте массив, состоящий только из имен и фамилий пользователей. Выведите результат в консоль.
// => ['Ivan Ivanov', 'Olga Petrova', 'Irina Alexandrova', 'Denis Sokolov', 'Anton Gribov']

const newArr = users.map((elem) => `${elem.first_name} ${elem.last_name}`);
console.log(newArr); // ['Ivan Ivanov', 'Olga Petrova', 'irina Alexandrova', 'Denis Sokolov' ]

// 7. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной => .find()

const user_olga = users.find((elem) => `${elem.first_name}` === "Olga");
console.log(user_olga); // { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 }

// const user_olga = users.find((elem) => `${elem.first_name}` === "Olga" && elem.age === 27); // пример

// ------------------------------------------------------------------------------------

const user_olga_find = users.find((el) => el.first_name === "Olga");
const user_olga_filter = users.filter((el) => el.first_name === "Olga");

// console.log(user_olga_find); // {...} - возвращается элемент
// console.log(user_olga_filter); // [ {...} ] - возвращается массив

// forEach возвращает undefined!

// || - Или

// && - and

// ! - not
// ------------------------------------------------------------------------------------

// 8. Сформировать массив со всеми пользователями, чьи first_name начинаются с буквы I/i

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },

  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },

  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },

  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

const users_i = users.filter(
  (elem) => `${elem.first_name[0]}` === "I" || `${elem.first_name[0]}` === "i"
);

const users_i_2 = users.filter((el) => el.first_name[0].toLowerCase() === "i");

console.log(users_i);
console.log(users_i_2);
// Ответ:
// [
//   { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
//   { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },
// ];

// 9. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760', 'Anton Grobov (36)'];

const adult_users = users
  .filter((elem) => elem.age >= 18)
  .map(
    (elem) =>
      `${elem.first_name} ${elem.last_name} (${elem.age}): ${elem.salary}`
  );
console.log(adult_users);

// [
//   "Ivan Ivanov (20): 500",
//   "irina Alexandrova (46): 1500",
//   "Denis Sokolov (30): 760",
// ];

// ------------------------------------------------------------------------

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },

  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },

  { first_name: "irina", last_name: "Alexandrova", age: 46, salary: 1500 },

  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

let arr = [];
for (let i = 0; i < users.length; i++) {
  arr.push(users[i].first_name);
}
console.log(arr); // [ 'Ivan', 'Olga', 'irina', 'Denis' ]
// ------------------------------------------------------------------------
