// Classes - Классы всегда назваются с большой буквы

class Panda {
  //   метод - constructor
  constructor(name) {
    console.log("Эеземпляр создался", name);
  }

  eat() {
    // eat - method
    console.log("пуам-пуам");
  }

  fall() {
    // fall - method
    console.log("puff!");
  }
}

// создаем Экземпляры класса!
const karl = new Panda("karl"); // Эеземпляр создался karl
karl.name = "karl"; // добавили свойства
console.log(karl); // Panda { name: 'karl' }

// создаем Экземпляры класса!
const tom = new Panda();

// вызываем методы
karl.eat(); // пуам-пуам
tom.eat(); // пуам-пуам

karl.fall(); // puff!
tom.fall(); // puff!
// --------------------------------------------------
class Panda {
  //   метод - constructor
  constructor(name, age = 44) {
    // age по умолчанию
    this.name = name; // this это ссылка на текуший обьект который создается классом
    this.age = age; // this это ссылка на текуший обьект который создается классом
    this.energy = 100; // energy задали по умолчанию!
    console.log(this); // Panda { name: 'karl' } // this это ссылка на текуший обьект который создается классом
  }

  eat() {
    // eat - method
    if (this.energy === 100) {
      console.log("Хватит коримить Панду");
    } else {
      this.energy += 20;
      console.log(`enegry: ${this.energy}`);
    }
  }

  fall() {
    // fall - method

    if (this.energy === 0) {
      console.log("Please, Stop");
    } else {
      this.energy -= 20;
      console.log("puff!", `energy: ${this.energy}`);
    }
  }
}
const karl = new Panda("karl"); // Класс
const tom = new Panda("tom", 15); // Класс
const bobik = new Panda("bobik", 20); // Класс
console.log(karl); // Panda { name: 'karl' }
console.log(karl.name); // karl

console.log(karl); // Panda { name: 'karl', age: 44, energy: 100 }
console.log(tom); // Panda { name: 'tom', age: 15, energy: 100 }
console.log(bobik); // Panda { name: 'bobik', age: 20, energy: 100 }

console.log(karl.fall()); // puff! energy: 80
console.log(karl.fall()); // puff! energy: 60
console.log(karl.fall()); // puff! energy: 40
console.log(karl.fall()); // puff! energy: 20
console.log(karl.fall()); // puff! energy: 0
console.log(karl.fall()); // Please, Stop

console.log(karl.eat()); // enegry: 20
console.log(karl.eat()); // enegry: 40
console.log(karl.eat()); // enegry: 60
console.log(karl.eat()); // enegry: 80
console.log(karl.eat()); // enegry: 100
console.log(karl.eat()); // Хватит коримить Панду

// дораблйте метод eat таким образом, чтобы при каждом вызове добавлялась 20 процентов энергии. Если энергия уже 100 процентов выведите какое-нибудь сооющение и не прибовляйте энергию

// ---------------------------------------
function multiplay(value) {
  console.log(value * 2);
}
multiplay(2); // 4
// ---------------------------------------
