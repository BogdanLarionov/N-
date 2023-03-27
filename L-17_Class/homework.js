// Дан массив с данными
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

//1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]

// map() - работает с элементами массива (object - это элемент массива)!

let new_arr = people.map(
  (elem) =>
    `${elem.first_name} ${elem.last_name} (${elem.city}, ${elem.country})`
);
console.log(new_arr);

// 2. Сформируйте массив из активных людей

let newArr = people.filter((elem) => elem.active === true);
let new_Arr = people.filter((elem) => elem.active); // короткий способ (лежит буливое значение. по умолчанию, возврощает true!)
console.log(newArr); //  Сформирован массив из активных людей!
console.log(new_Arr); //  Сформирован массив из активных людей!

//3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)

let arr_name_d = people.filter(
  (elem) => elem.first_name[0] === "D" || elem.first_name[0] === "d"
); // получили массив

let arr_name_D = people.filter(
  (elem) => elem.first_name[0].toUpperCase() === "D"
);

// startsWith()  - method

const arr_name_d = people.filter((elem) =>
  elem.first_name.toLowerCase().startsWith("d")
); // получили массив
console.log(arr_name_d);

const arr_name_d = people.filter(
  (elem) => elem.first_name.startsWith("d") || elem.first_name.startsWith("D")
); // получили массив

console.log(arr_name_d);
console.log(arr_name_d); // второй метод
console.log(arr_name_D); // второй метод

//4. Получите из массива объект, где страной проживания человека является 'Germany'

let getCountry = people.find((elem) => elem.country === "Germany");
console.log(getCountry); // country: 'Germany', вернется  {...}   обьект!

let getCountry = people.filter((elem) => elem.country === "Germany");
console.log(getCountry); // country: 'Germany', вернется [ {...} ] массив с обьектом!

// 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

let getAdultPeople = people
  .filter((elem) => elem.age >= 18)
  .map(
    (elem) =>
      `${elem.first_name} ${elem.last_name} (${elem.age}), ${elem.country} (${elem.city})`
  );
console.log(getAdultPeople); // [ 'Ivan Ivanov (20), Russia (Moscow)','Irina Alexandrova (46), France (Paris)' ]

// 6. Измените у первого элемента значение first_name на "Petr" и age на 99;

people[0].first_name = "Petr"; // поменяли имя
people[0].age = 99; // поменяли возрост
console.log(people);
// ---------------
const user = {
  first_name: "Nelli",
  last_name: "Efremyan",
  age: 27,
};

// user = [1, 2, 3]; => ошибка

// user.age = 50; // => можно

// user = {
//   city: 'Yerevan'
// } => ошибка

console.log(user);
