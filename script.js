'use strict';

// ====== Task1 ======

class Plane {
    constructor(name, isFlying = false) {
      this.name = name;
      this.isFlying = isFlying;
    }

    // // Getter 
    // get getHeight() {
    //   return this.height;
    // }

    // // Setter
    // set setHeight(newHeight) {
    //   this.height = newHeight;
    // }

    // get area() {
    //   return this.#calcArea();
    // }

    takeOff() {
      return this.isFlying = true;
    }

    land() {
        return this.isFlying = false;
    }
  }

//   const airport = new Plane 
// Создайте объект airport со свойством planes (массив объектов класса Planes ) и методом getFlyingPlanes(), 
// который вовзращающий количество элементов из массива planes , у которых isFlying равняется true.

// Cоздайте несколько объектов на основе класса Plane и добавьте их в массив самолетов в airport. 
// Измените любым объектам значение isFlying на true; Продемонстрируйте метод getFlyingPlanes() в работе.

// Изменение isFlying сделайте при помощи кнопки по нпжптию на которую будет менятся кол-во самолетов в воздухе,
//  тоесть братся значение getFlyingPlanes

console.log('====== Task 2 =====');


class User {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
    get getFullName() {
      return `${this.name} ${this.surname}`;
    }
  }

const user = new User('Regina', 'Varybrus');
console.log('check', user.name, user.surname);
console.log('fullname', user.getFullName);

class Student extends User {
    constructor(name, isFlying, year) {
      super(name, isFlying);
      this.year = year;
    }
    get getCourse() {
        let currentYear = new Date().getFullYear();
        if (this.year >= 2018 && this.year != currentYear) {
            return currentYear - this.year;
        }
        else {
            console.log('You are not a student!'); // от себя добавила
        }
    }
  }

const student = new Student('Ivan', 'Fomenko', 2020);
console.log('check', student.name, student.surname, student.year);
console.log('fullname', student.getFullName);
console.log('course', student.getCourse);

// 2) Реализуйте класс Student (Студент), который будет наследовать от класса User. 
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User),
//  year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), 
//  с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), 
//  который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. 
//  Текущий год получите самостоятельно.

// User - имеет только имя и фамилию
// Student - все остальное