// 1. Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: (user, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

const user = {
  firs_name: "Nelli",
  last_name: "Efremyan",
};
const get_value = (obj, key) => {
  return obj[key];
};
console.log(get_value(user, "last_name")); // Efremyan
// --------------------------------------------------------------
const user = {
  firs_name: "Nelli",
  last_name: "Efremyan",
};
const get_value = (obj, key) => obj[key];
console.log(get_value(user, "firs_name")); // Nelli
// --------------------------------------------------------------
const user = {
  firs_name: "Nelli",
  last_name: "Efremyan",
};
const get_value = (obj, key) => obj[key];

console.log(
  get_value({ firs_name: "Nelli", last_name: "Efremyan", age: 27 }, "age")
); // 27

console.log(get_value({ city: "Berlin", country: "Germany" }, "country")); // Germany

// --------------------------------------------------------------
const user = {
  firs_name: "Nelli",
  last_name: "Efremyan",
};
const get_value = (obj, key = "firs_name") => obj[key];

console.log(get_value(user)); // Nelli
// --------------------------------------------------------------

const person = {
  name: "Ivan",
  age: 23,
};

let key = "name";

console.log(person.name); // Ivan
console.log(person["name"]); // Ivan
console.log(person[key]); // Ivan
// --------------------------------------------------------------
// 2. Проверьте, что массив не пустой - в нем есть хотя бы один объект с ключом age.

const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    city: "Moscow",
    country: "Russia",
    active: true,
  },
  {
    first_name: "dmitry",
    last_name: "Petrov",
    age: 7,
    city: "Berlin",
    country: "Germany",
    active: true,
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    city: "Paris",
    country: "France",
    active: false,
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 10,
    city: "Rome",
    country: "Italy",
    active: false,
  },
];

console.log(people[0].age); // 20 or undefined если пусто
console.log(people[0].hasOwnProperty("age")); // true  если пусто false
console.log("age" in people[0]); // true  если пусто false
