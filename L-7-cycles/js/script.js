// Cycles for

// for (выражение 1 - start ; выражение 2 - до куда считать; выражение 3,шаг увеличение итерратора) {
// }

// выражение 1 - начальное значение счетчика
// выражение 2 - условие повторения цикла
// выражение 3 - изменение счетчика

// i = i + 1
// i += 1
// i++

// Напишите цикл for, который выводить в консоль числа от 1 до 10

for (let i = 1; i <= 10; i++) {
  // for (let i = 1; i <= 10; i+=1) { }
  console.log(i); // 1 - 10
}

// Напишите цикл for, который выводить в консоль числа от 15 до 65 с шагом 5
// => 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,

for (let i = 15; i <= 65; i += 5) {
  // for (let i = 15; i <= 65; i = i + 5) {}
  console.log(i); // 15,20 - 60,65
}

// Напишите цикл for, который выводить в консоль числа от 65 до 15 с шагом 5
// =>   65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15

for (let i = 65; i >= 15; i -= 5) {
  console.log(i); // 65, 60 - 20, 15
}

// В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.

// вернет четные (declaration function)
function getPositiveNums(n, m) {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
getPositiveNums(60, 40); // 40,42,44,46,48,50,52,54,56,58,60

// вернет нечетные (declaration function)
function getNegativNums(n, m) {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
getNegativNums(60, 40); // 41,43,45,47,49,51,53,55,57,59

// array function вернет нечетные
const getNegativNums = (n, m) => {
  for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
};
getNegativNums(60, 40); // 41,43,45,47,49,51,53,55,57,59
// --------------------------------------------------------
function multByFactory(value, multiplier = 1) {
  return value * multiplier;
}
multByFactory(10, 2);
console.log(multByFactory(10, 2)); // 20

const multByFactory = (value, multiplier = 1) => value * multiplier;
console.log(multByFactory(10, 2)); // 20
// --------------------------------------------------------
// js - это язык со слабой типизацией
// 7 - 7 = 0
// 7 - "7" = 0
// 7 == '7' true нестрогое равенство по типу данных
// 7 === '7' false строгое равенство по типу данных
// --------------------------------------------------------
// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего. Если числа равны, то вывести сообщение "The numbers are equal"
// mento_1
const getNums2 = (n, m) => {
  if (n > m) {
    for (let i = n; i >= m; i--) {
      console.log(i);
    }
  } else if (m > n) {
    for (let i = m; i >= n; i--) {
      console.log(i);
    }
  } else {
    console.log("The numbers are equal");
  }
};
getNums2(7, 19); // 19, 18, 17, 9, 8, 7
getNums2(70, 55); // 70,69,68 - 57,56,55
getNums2(10, 10); // The numbers are equal

// metod_2
const getNums3 = (n, m) => {
  if (n === m) {
    console.log("The numbers are equal");
    return;
  }
  for (let i = Math.max(n, m); i >= Math.min(n, m); i--) {
    console.log(i);
  }
};
// getNums3(16, 9); // 16,15,14 - 11,10,9
// getNums3(16, 16); // The numbers are equal
// --------------------------------------------------------
// Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.

const getSum = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i; //1,3,
  }
  return sum;
};
console.log(getSum()); // 55

const getMult = () => {
  let result = 1;
  for (let i = 1; i <= 3; i++) {
    result *= i; //1,3,
  }
  return result;
};
console.log(getMult()); // 6

// --------------------------------------------------------
// Напишите программу, которая с помощью цикла считает сумму четных чисел от 1 до 10 и выводит в консоль. => 30

const getSum1 = () => {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(getSum1()); // 30
