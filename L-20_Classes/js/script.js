// Classs

// создать класс User со свойствами neme, age и методом sayHi который выводит в консоль фразу 'Привет'
// роли root, admin, manager, user

class User {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;

    //   проверить указываемую роль и если она входит в список допустимых указать ее пользователю в ином случае в свойство role указать undefined
    if (["root", "admin", "manager", "user"].includes(role)) {
      this.role = role;
    } else {
      this.role = undefined;
    }
  }

  sayHi() {
    console.log("Привет");
  }

  change_name(new_name) {
    this.name = new_name;
  }

  //   birthday(year) {
  //     this.age += year;
  //   }

  birthday() {
    this.age++;
    console.log("Всегда оставайс таким веселым!");
  }
}

const user_1 = new User(`Bogdan`, 32);

console.log(user_1); // User { name: 'Bogdan', age: 32 }

console.log(user_1.name); // Bogdan
console.log(user_1.age); // 32

user_1.sayHi(); // Привет

// прменяли имя
user_1.change_name("Анатолий");
console.log(user_1); // User { name: 'Анатолий', age: 32 }

user_1.name = "Вова";
console.log(user_1); // User { name: 'Вова', age: 32 }

// Добавить метод birthday который увеличивает возраст на единицу и выводит поздровления в консоль
// ----------------------
// user_1.birthday(1);
// console.log(user_1); // User { name: 'Вова', age: 33 }
// ----------------------

user_1.birthday(); // Всегда оставайс таким веселым!

console.log(user_1); // User { name: 'Вова', age: 33 }

const user_2 = new User(`Bogdan`, 32, "admit");
const user_3 = new User(`Bogdan`, 32, "student");

console.log(user_2); // User { name: 'Bogdan', age: 32, role: undefined }
console.log(user_3); // User { name: 'Bogdan', age: 32, role: undefined }
