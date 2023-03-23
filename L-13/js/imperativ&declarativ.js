// ===============================================================================

//ИМПЕРАТИВНЫЙ СПОСОБ - говорим программе КАК выполнить задачу!

// этот способ еще и длиней

// создать новый массив с отрицательными числами
let arr = [1, -6, 4, 0, 9, -5, 16];
let negativ_arr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    negativ_arr.push(arr[i]);
  }
}
console.log(negativ_arr); // [ -6, -5 ]

//ДЕКЛАРАТИВНОЕ СПОСОБ - говорим программе ЧТО надо сделать!

// создать новый массив с отрицательными числами
let arr = [1, -6, 4, 0, 9, -5, 16];
let negativ_arr = arr.filter((elem) => elem < 0);
console.log(negativ_arr); // [ -6, -5 ]
// ==============================================================================
// https://learn.javascript.ru/var
// облость видемости

// Создайте функцию, принимающую массив и возвращающую массив с отрицательными числами

let array = [1, 34, -10, 8, -5, -3];
const negativArr = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
  return newArray;
};
negativArr(array);
// -------------------------------------
// облость видемости в цикле с var видна за циклом а с let не пидна!
let array = [1, 34, -10, 8, -5, -3];
let newArray = [];
for (var i = 0; i < array.length; i++) {
  // for (let i = 0; i < array.length; i++) {  !!!
  if (array[i] < 0) {
    newArray.push(array[i]);
  }
}

console.log(i); // 6
