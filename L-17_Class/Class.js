// Class - один из способов создание обьектов

// class Car - название класса всегда пишется с большей букы!

// экземпляр класса

// создали экземпляр класса new Car и передаем свойства
class Car {
  // это как шаблон!
  // constructor -  это встроенный метод
  constructor(name, model, country, volume, color, year) {
    this.name = name; // this - это ссылка на обьект на с которым происходит событие
    this.model = model; // name свойство = присвоенное свойсто
    this.country = country;
    this.volume = volume;
    this.color = color;
    this.year = year;
  }
}
// это object! - car_1, car_2
const car_1 = new Car("Toyota", "RAV4", "Japon", 2.4, "red", 2020);
// this.name === car_1.name
const car_2 = new Car("BMW", "X3", "Germany", 2.0, "black", 2022);
// this.name === car_2.name
const car_3 = new Car("Audi", "Q3", undefined, 2.0, "white", 2018);
// this.name === car_3.name
const car_4 = new Car("Audi", "Q3", "", 2.0, "white", 2018);
// this.name === car_4.name
// с помощью класса напишим конструктор, который будет брать данные и подстовлять их в свойства
// name, model, country,vilume, color, year - свойства это то что описывает обьект!

// name : 'Toyota'
// model: 'RAV4'
console.log(car_1); // Car {name: 'Toyota',model: 'RAV4',country: 'Japon',volume: 2.4,color: 'red',year: 2020 }  - название класса Car с помощью которого был создан этот object
console.log(car_2); //  Car { name:'BMW', model:'X3',country:'Germany',volume:2,color:'black',year:2022 } -  название класса Car с помощью которого был создан этот object

console.log(car_3); // Car {name: 'Audi',model: 'Q3',country: undefined,volume: 2,color: 'white',year: 2018}
console.log(car_4); // Car {name: 'Audi',model: 'Q3',country: '' ,volume: 2,color: 'white',year: 2018}
// -------------------------------------------------------------------------------------------------
// создание через обьект длинее, нужно каждый обьект создовать занова руками! чтобы не дублтровать код создается class Car {...} - со знасениями

// 1.Литеральная нотация
const car_1_1 = {
  name: "Toyota",
  model: "RAV4",
  country: "Japon",
  volume: 2.4,
  color: "red",
  year: 2020,
};

// Литеральная нотация
const car_2_2 = {
  name: "BMW",
  model: "X3",
  country: "Germany",
  volume: 2,
  color: "black",
  year: 2022,
};
console.log(car_1_1, car_2_2);
// { name: 'Toyota',model: 'RAV4',country: 'Japon',volume: 2.4,color: 'red',year: 2020 }
// { name:'BMW', model:'X3',country:'Germany',volume:2,color:'black',year:2022 }
console.log(car_1_1.country); // Japon
console.log(car_2_2.name); // BMW

// -------------------------------------------------------------------------------------------------
// Экземпляр класса - объект, созданный через класс
// this - контекст, ссылка на объект, с которым происходит действие

// Создаем экземпляры классов

// Способы создания обьекта :
// 1.Литеральная нотация
// 2. Спомошью Class
// 3. через object
// 4.
// -------------------------------------------------------------------------------------------------
// самописный метод
class Car {
  constructor(name, model, country, volume, color, year) {
    this.name = name;
    this.model = model;
    this.country = country;
    this.volume = volume;
    this.color = color;
    this.year = year;
  }
  get_info() {
    // методы
    console.log(
      `Машина: ${this.name} (${this.model}) из страны: ${this.country}`
    );
  }
  get_year() {
    // методы
    console.log(`Год выпуска: ${this.year}`);
  }
}
// Создаем экземпляры классов
const car_5 = new Car("LADA", "Vesta", "Russia", 1.3, "red", 2020);
const car_6 = new Car("Peugeot", "307", undefined, 1.6, "red", 2019);
const car_7 = new Car("BMW", "X5", "", 2.8, "red", 2010);

// Вызываем метод get_info()

car_5.get_info(); // Машина: LADA (Vesta) из страны: Russia
car_6.get_info(); // Машина: Peugeot (307) из страны: undefined
car_7.get_info(); // Машина: BMW (X5) из страны:

car_6.get_year(); // Год выпуска: 2019
car_5.get_year(); // Год выпуска: 2020
// -------------------------------------------------------------------------------------------------
// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства:
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса
//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'

class Country {
  constructor(name, capital, population, climat) {
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.climat = climat;
  }

  get_capital() {
    console.log(`The capital of ${this.name} is ${this.capital}`);
  }
}

const get_one = new Country("Germany", "Berlin", 83000000, "cold");
const get_two = new Country("Spain", "Madrid", 47000000, "hot");
const get_three = new Country("Russia", "Moscow", 140000000, "cold");

console.log(get_one); // Country {name: 'Germany',capital: 'Berlin',population: 83000000,climat: 'cold'}
console.log(get_two.capital); // Madrid
console.log(get_three.name); // Russia
console.log(get_three.population); // 140000000
console.log(get_three.climat); // cold

get_one.get_capital(); // The capital of Germany is Berlin
get_two.get_capital(); // The capital of Spain is Madrid
get_three.get_capital(); // The capital of Russia is Moscow
