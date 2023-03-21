// Дан массив

// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// Сформируйте новый массив с числами меньше 100. Предложите два способа решения (цикл for и метод .forEach).
// цикл for
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_array = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] < 100) {
    new_array.push(array[i]);
  }
}
console.log(array); // [ 200, 45, 65, 670, 352, 32,  1,  0,   7 ]
console.log(new_array); // [ 45, 65, 32, 1, 0, 7 ]

//  метод .forEach()

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let new_arr = [];
array.forEach((element) => {
  if (element < 100) {
    new_arr.push(element);
  }
});
console.log(array); // [ 200, 45, 65, 670, 352, 32,  1,  0,   7 ]
console.log(new_arr); // [ 45, 65, 32, 1, 0, 7 ]

// Сформируйте новый массив с числами, которые кратны 2(кратны - делится на 2). Предложите два способа решения (цикл for и метод .forEach).

// цикл for
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let newArr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0 && array[i] !== 0) {
    newArr.push(array[i]);
  }
}

console.log(array); // [200, 45, 65, 670, 352, 32, 1, 0, 7];
console.log(newArr); //[ 200, 670, 352, 32 ]

// метод.forEach()
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];
let newArr = [];
array.forEach((element) => {
  if (element % 2 === 0 && element !== 0) {
    newArr.push(element);
  }
});
console.log(newArr); // [ 200, 670, 352, 32  ]

// Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).

// цикл for
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7, 5];
let newArr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 10 === 5) {
    newArr.push(array[i]);
  }
}
console.log(newArr); // [ 45, 65, 5 ]

// метод .forEach()
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7, 5];
let newArr = [];
array.forEach((element) => {
  if (element % 10 === 5) {
    newArr.push(element);
  }
});
console.log(newArr); // [45, 65, 5];

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).

// цикл for
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7, 5];
let arrayBig = [];
let arrayLitlle = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 100) {
    arrayBig.push(array[i], ">100");
  } else {
    arrayLitlle.push(array[i], "<100"); // [ 200, '>100', 670, '>100', 352, '>100' ]
  }
}
console.log(arrayBig); // [ 200 '>100', 670 '>100', 352 '>100' ]
console.log(arrayLitlle); // [ 45 '<100',  65 '<100', 32 '<100',  1 '<100', 0 '<100',  7 '<100',  5 '<100']

// метод.forEach()
let array = [200, 45, 65, 670, 352, 32, 1, 0, 7, 5];
let newArray = [];
array.forEach((element) => {
  if (element >= 100) {
    newArray.push(">100");
  } else {
    newArray.push("<100");
  }
});

console.log(newArray); // [  '>100', '<100','<100', '>100','>100', '<100','<100', '<100','<100', '<100']
