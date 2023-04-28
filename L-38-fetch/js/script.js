// https://jsonplaceholder.typicode.com/users

// фенкция fetch принимает ссылку - возращает обьект promise
// object promise позволяет указать две callback function,
//  одна из которых отработала коректно, а вторая если есть какието проблемы вернуть

//   на основе ранее реализованного fetch запроса напишите запрос, который возвращает данные одного пользователя (с id 5)

// fetch("https://jsonplaceholder.typicode.com/users/5") лучше делать так!
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
//   .then((data) => console.log(data[4])); // чем так!

// Написать функуию, котороя в качестве аргумента получает id пользователя и выводит данные о нем в консоль

function showUser(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// showUser(2);
// showUser(4);
// showUser(3);

function showUser(id, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => callback(data));
}

showUser(2, console.log);
