// Реализуйте класс Group (групп), который будет иметь следующие свойства:
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
  constructor(name, major, number = 15) {
    this.name = name;
    this.major = major;
    this.number = number;
  }

  //   метод
  add_student(student) {
    this.number += student;
  }

  delete_student(student) {
    this.number -= student;
  }
}

// экземпляр этого класса!
const group_one = new Group("33-34", "QA", 13);
const group_twoo = new Group("32-33", "FrontEnd", 10);
const group_three = new Group("43-44", "BackEnd");

console.log(group_one); // Group { name: '33-34', major: 'QA', number: 13 }
console.log(group_twoo); // Group { name: '32-33', major: 'FrontEnd', number: 10 }
console.log(group_three); // Group { name: '43-44', major: 'BackEnd', number: 15 }

group_one.add_student(10); // добавили студента
console.log(group_one); // Group { name: '33-34', major: 'QA', number: 23 }

group_twoo.delete_student(5); // удалили студента
console.log(group_twoo); // Group { name: '32-33', major: 'FrontEnd', number: 5 }

group_three.add_student(15); // добавили студента
console.log(group_three); // Group { name: '43-44', major: 'BackEnd', number: 30 }
// ------------------------------------------------------------------------------------------
class Group {
  constructor(name, major, number = 15) {
    this.name = name;
    this.major = major;
    this.number = number;
    // this.number = 15; по умолчанию
  }

  add_student() {
    this.number++;
  }

  delete_student() {
    this.number--;
  }
}

const group_1 = new Group("31/32", "Javasript", 19);
const group_2 = new Group("33/34", "Python");

group_1.add_student();
group_1.add_student();

group_2.delete_student();

// console.log(group_1);
// console.log(group_2);

// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив

let all_groups = [];

const create_group = (name, major, num) => {
  const group = new Group(name, major, num); // создали экземпляр класса/объект
  all_groups.push(new Group(name, major, num)); // добовляем объект в массив
};

create_group("31/32", "Javasript", 19);
create_group("33/34", "Python");
create_group("35/36", "Java", 20);

console.log(all_groups);

// [
//   Group { name: '31/32', major: 'Javasript', number: 19 },
//   Group { name: '33/34', major: 'Python', number: 15 },
//   Group { name: '35/36', major: 'Java', number: 20 }
// ]

// ------------------------------------------------------------------------------------------
// короткий способ

let all_groups = [];

const create_group = (name, major, num) =>
  all_groups.push(new Group(name, major, num)); // добовляем объект в массив

create_group("31/32", "Javasript", 19);
create_group("33/34", "Python");
create_group("35/36", "Java", 20);

console.log(all_groups);
// [
//   Group { name: '31/32', major: 'Javasript', number: 19 },
//   Group { name: '33/34', major: 'Python', number: 15 },
//   Group { name: '35/36', major: 'Java', number: 20 }
// ]
