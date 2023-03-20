let arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr.push(6); // добавляет элемент в конец массива
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
arr.unshift(0); // добавляет элемент в начало массива
console.log(arr);
arr.pop(); // извлекает элемент из конца массива
console.log(arr);
arr.shift(); // извлекает элемент из начала массива
console.log(arr);

// Напишите цикл for, который создает массив из чисел от 1 до 10.

let arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr); // [1, 2, 3, 4,  5,6, 7, 8, 9, 10]
