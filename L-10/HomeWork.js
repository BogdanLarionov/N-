// Напишите функцию, которая принимает два числовых аргумента a и b (a > b), и выводит в консоль числа от a до b кратные 3.
// Пример (10, 3) => 9, 6, 3

const getNums = (a, b) => {
  for (let i = a; i >= b; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};
getNums(10, 1); // 9, 6, 3
getNums(100, 54); // 99, 96, 93 - 60, 57, 54

// Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 или 5. Выведите сумму в консоль.

const getSum = () => {
  let = sum = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      //sum = sum + i
    }
  }
  return sum;
};
console.log(getSum()); // 2418

// Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const getArray = () => {
  let result = [];
  for (let i = 0; i <= 50; i++) {
    if (i % 5 === 0) {
      result.push(i);
    }
  }
  return result;
};
console.log(getArray()); // [0,5,10,15,20,25,30,35,40,45,50]

// Напишите функцию, формирующую массив из чисел от a до b (b > a) кратных 2.

const getArr = (a, b) => {
  let arr = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(getArr(5, 30)); // [  6,  8, 10, 12, 14, 16,  18, 20, 22, 24, 26, 28,  30 ]

// Write a function that reverses a string. The input string is given as an array of characters s.

const reversStr = (arr) => {
  let reverse_arr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse_arr.push(arr[i]);
  }
  return reverse_arr;
};

console.log(reversStr(["h", "e", "l", "l", "o"])); // [ 'o', 'l', 'l', 'e', 'h' ]
// короткий способ
// -------------------------
// метод reverse() возврящает данные обратным порядком!
const reversStr1 = (arr) => arr.reverse();
console.log(reversStr1(["h", "e", "l", "l", "o"])); // [ 'o', 'l', 'l', 'e', 'h' ]
// -------------------------
// метод sort() сортирует по первому числу !!
let a = [1, 40, 53, 3, 6, 15];
console.log(a.sort()); // 1, 3, 6, 15, 40, 53 =>  1, 15, 3, 40, 53, 6
// -------------------------
