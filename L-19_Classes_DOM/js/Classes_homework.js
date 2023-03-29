//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)
//Создайте экземпляр этого класса
//Выведете в консоль все свойства созданного экземпляра класса
// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

class Language {
  // следующие свойства:
  constructor(name, alphabet, country) {
    this.name = name;
    this.alphabet = alphabet;
    this.country = country;
  }
  // методы выведит строку
  get_info() {
    console.log(
      `Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке ${this.country}`
    );
  }
}
// Создаем экземпляры классов
const country_one = new Language("English", "Latin", "England");
const country_two = new Language("Russian", "Cyrillic", "Russia");
const country_three = new Language("Armenian", "Indo-European", "Armenia");

//Выведете в консоль все свойства созданного экземпляра класса
console.log(country_one.name); // English
console.log(country_two.alphabet); // Cyrillic
console.log(country_three.country); // Armenia

country_one.get_info(); // Язык: English, Алфавит: Latin, Страна, в которой говорят на этом языке England
country_two.get_info(); // Язык: Russian, Алфавит: Russia, Страна, в которой говорят на этом языке Cyrillic
country_three.get_info(); // Язык: Armenian, Алфавит: Indo-European, Страна, в которой говорят на этом языке Armenia

//========================================================================

//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//С помощью класса создайте двух рабочих и найдите сумму их зарплат.
// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

class Worker {
  // свойства:
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    // this.salaty = rate * days;
  }

  // методы
  getSalary() {
    return this.rate * this.days;
  }

  add_days(amount) {
    this.days += amount;
  }

  delete_days(amount) {
    this.days -= amount;
  }
}

// Экземпляр класса
const worker_one = new Worker("Bogdan", "Larionov", 12, 10);
const worker_twoo = new Worker("Alena", "Larionova", 30, 30);

const salary_1 = worker_twoo.getSalary();
const salary_2 = worker_twoo.getSalary();

const salary_all = salary_1 + salary_2;
console.log(salary_all); // 1800

console.log(worker_one.getSalary()); // 120

console.log(worker_one); // Worker { name: 'Bogdan', surname: 'Larionov', rate: 12, days: 10 }
worker_one.add_days(7);
console.log(worker_one); // Worker { name: 'Bogdan', surname: 'Larionov', rate: 12, days: 17 }

console.log(worker_twoo); // Worker { name: 'Alena', surname: 'Larionova', rate: 30, days: 30 }
worker_twoo.delete_days(7);
console.log(worker_twoo); // Worker { name: 'Alena', surname: 'Larionova', rate: 30, days: 23 }
