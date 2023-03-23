// методы массивов, reduce()

// Используя метод forEach выведите квадраты этих чисел в консоль
const lst = [12, 4, 32, 3, 45, 43];
lst.forEach((elem) => console.log(elem ** 2)); // 144 16, 1024, 9, 2025, 1849

// Используя метод forEach выведите в консоль четные числа
const lst = [12, 4, 32, 3, 45, 43];
lst.forEach((elem) => {
  if (elem % 2 === 0) {
    console.log(elem); // 12, 4, 32
  }
});

const lst = [12, 4, 32, 3, 45, 43];
lst.forEach((elem) => (elem % 2 === 0 ? console.log(elem) : "")); // 12, 4, 32

// пользуясь методом map реалезуйте новый массив, в котором все отрецательные значения были преобразованны в положительные

// map
const lst = [12, -4, 32, 3, -45, 43];
let newArr = lst.map((elem) => {
  if (elem < 0) {
    return -elem;
  } else {
    return elem;
  }
});
console.log(newArr); // [ 12, 4, 32, 3, 45, 43 ]

// map =>
const lst = [12, -4, 32, 3, -45, 43];
let newArr = lst.map((elem) => (elem < 0 ? -elem : elem));
console.log(newArr); //[ 12, 4, 32, 3, 45, 43 ]

// map =>
const lst = [12, -4, 32, 3, -45, 43];
let newArr = lst.map((elem) => (elem < 0 ? elem * -1 : elem));
console.log(newArr); //[ 12, 4, 32, 3, 45, 43 ]

// for
const lst = [12, -4, 32, 3, -45, 43];
let new_arr = [];
for (let i = 0; i < lst.length; i++) {
  if (lst[i] < 0) {
    new_arr.push(-lst[i]);
  } else {
    new_arr.push(lst[i]);
  }
}
console.log(new_arr); // [ 12, 4, 32, 3, 45, 43 ]

// с использование метода map реализует процесс, который формирует новый массив состоящий из булевых значений если число в изначальном массиве четное, то в результирующий добавится true, в ином случае false
const lst = [12, 4, 32, 3, 45, 43];
let newArr = lst.map((elem) => (elem % 2 === 0 ? true : false));
console.log(newArr); // [ true, true, true, false, false, false ]

const lst = [12, 4, 32, 3, 45, 43];
let newArr = lst.map((elem) => elem % 2 === 0);
console.log(newArr); // [ true, true, true, false, false, false ]

const lst = [12, 4, 32, 3, 45, 43];
let newArr = lst.map((elem) => !(elem % 2));
console.log(newArr); // [ true, true, true, false, false, false ]

// используя метод filter сформировать массив, который состоит только из чисел меньще 10
const lst = [12, 4, 32, 3, 45, 43];
let new_lst = lst.filter((elem) => elem < 10);
console.log(new_lst); // [ -4, 3 ]

const array = [12, 4, 32, 3, 45, 43];
let newArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < 10) {
    newArray.push(array[i]);
  }
}
console.log(newArray); // [ 4, 3 ]
