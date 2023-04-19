// синхронность - действие выполняется последовательность

let a = 10;
a = 34;
console.log(a);

// асинхронность - действие выполняется с задерэеой последовательность

let b = 10;

setTimeout(() => {
  b = 34;
  console.log(b);
}, 2000);

console.log(b);

// ----------------------------------------------------------------------------------------------------------------
// Promise - обезание выполнить запрос с сервера (обещание выролнить запрос посже)

// resolve - решить, reject - отклонить;

// способ с reject
let c = 10;
let example = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve((c = 34));
  }, 2000);
});

example.then(() => console.log(c));

// способ с reject
const random_num = new Promise((resolve, reject) => {
  if (Math.random() >= 0.5) {
    resolve();
  } else {
    reject();
  }
});

random_num.then(
  () => console.log(">=0.5"),
  () => console.log("< 0.5")
);

// primer:
const random_num_1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a >= 0.5) {
    resolve(a);
  } else {
    reject(a);
  }
});

random_num_1.then(
  (value) => console.log(`${value} >=0.5`),
  (value) => console.log(`${value} <0.5`)
);
