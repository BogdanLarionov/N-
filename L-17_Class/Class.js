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
const car_2 = new Car("BMW", "X3", "Germany", 2.0, "black", 2022);
// с помощью класса напишим конструктор, который будет брать данные и подстовлять их в свойства
// name, model, country,vilume, color, year - свойства это то что описывает обьект!

// name : 'Toyota'
// model: 'RAV4'
console.log(car_1); // Car {name: 'Toyota',model: 'RAV4',country: 'Japon',volume: 2.4,color: 'red',year: 2020 }  - название класса Car с помощью которого был создан этот object
console.log(car_2); //  Car { name:'BMW', model:'X3',country:'Germany',volume:2,color:'black',year:2022 } -  название класса Car с помощью которого был создан этот object
// -------------------------------------------------------------------------------------------------
// создание через обьект длинее, нужно каждый обьект создовать занова руками! чтобы не дублтровать код создается class Car {...} - со знасениями
const car_1_1 = {
  name: "Toyota",
  model: "RAV4",
  country: "Japon",
  volume: 2.4,
  color: "red",
  year: 2020,
};

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
// -------------------------------------------------------------------------------------------------
// Экземпляр класса - объект, созданный через класс
// this - контекст, ссылка на объект, с которым происходит действие

// Создаем экземпляры классов
