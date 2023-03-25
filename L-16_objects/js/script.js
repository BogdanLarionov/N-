let arr = [12, 4, 23, 45, 432];
console.log(arr[3]); // 45

// имя, фамилия, возрост, зарплата
let arr = ["Анатолий", "Ушанов", 29, 130000];
console.log(arr[1]); // Ушанов

let user = {
  name: "Анатолий",
  lastname: "Ушанов",
  age: 29,
  salary: 130000,
};
console.log(user["lastname"]); // Ушанов
console.log(user.lastname); // Ушанов
console.log(user["lastname"]); // Ушанов

// замении  lastname на 'Куликов'
user["lastname"] = "Куликов";
user.lastname = "Куликов";
console.log(user); // { name: 'Анатолий', lastname: 'Куликов', age: 29, salary: 130000 }

// добавили id
user.id = 1;
user["id"] = 1;
console.log(user); //  { name: 'Анатолий', lastname: 'Куликов', age: 29, salary: 130000 , id: 1}

// удалить
delete user.salary;
console.log(user);
// ---------------------------------------------------------
// создать обьект product со свойствами id, title и price

//  увеличить стоимость на 20 процентов
// добавить свойство description с каким-то описанием
// вывести обьект

const product = {
  id: 1,
  title: "bike",
  price: 3000,
};

product.price *= 1.2;
console.log(product); // { id: 1, title: 'bike', price: 3600 }

product.description = "mountain bike";
console.log(product); // { id: 1, title: 'bike', price: 3600, description: 'mountain bike' }

// Задача
const products = [
  { id: 1, title: "велосипед", price: 55000 },
  { id: 2, title: "ролики", price: 15000 },
  { id: 3, title: "скейт", price: 10000 },
];

console.log(products); // вывели масив с обьектами

// используя метод forEach вывести каждый объект отдельно

products.forEach((element) => console.log(element));

// вывести при помощи forEach только название продукта

products.forEach((element) => console.log(element.title)); // велосипед, ролики, скейт;

// сформировать новый массив, который состоит только из тех товаров, цена на которых больше 12000.Вывести получившийся массив

let newArr = products.filter((elem) => elem.price >= 12000);
console.log(newArr); // [ { id: 1, title: "велосипед", price: 55000 }, { id: 2, title: "ролики", price: 15000 }, ];

// формируем новый массив, который состоит только из названий

let newArr = products
  .filter((elem) => elem.price >= 12000)
  .map((elem) => elem.title);
console.log(newArr); // [ 'велосипед', 'ролики' ]

// найти общую сумму стоимосей товаров

let newArr = products.reduce((acc, value) => acc + value.price, 0);
console.log(newArr); // 80000

//( 0, obj_1) => 0 + 55000
//( 55000, obj_2) => 55000 + 15000
//( 70000, obj_3) => 70000 + 10000
// 80000

const customers = [
  { id: 1, name: "Максим", orders: [10000, 23000, 19000] },
  { id: 2, name: "Олег", orders: [12000, 43000, 9000] },
  { id: 3, name: "Ольга", orders: [22000, 44000, 6000] },
  { id: 4, name: "Семен", orders: [32000, 65000, 11000] },
];

// реализовать новый массив, в котором будет поля id, name, order_total

const new_list = customers.map((elem) => {
  return {
    id: elem.name,
    name: elem.name,
    order_total: elem.orders.reduce((acc, value) => acc + value),
  };
});
console.log(new_list);

// [
//   { id: "Максим", name: "Максим", order_total: 52000 },
//   { id: "Олег", name: "Олег", order_total: 64000 },
//   { id: "Ольга", name: "Ольга", order_total: 72000 },
//   { id: "Семен", name: "Семен", order_total: 108000 },
// ];
