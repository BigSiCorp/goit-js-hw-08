// // // Реалізуйте клас Student, який успадковуватиметься від класу User. Цей клас повинен мати такі властивості:
// // // name приватна властивість (ім'я, успадковується від User),
// // // surname приватна властивість (прізвище, успадковується від User),
// // // year (рік вступу до вузу).
// // // Клас повинен мати метод getFullName() (успадковується від User), за допомогою якого можна вивести одночасно ім'я та прізвище студента.
// // // Також клас повинен мати метод getCourse(), який виводитиме поточний курс студента (від 1 до 5, якщо значення перевищує 5  курс виводити що студент являєтсья випускником).
// // // Курс обчислюється так: потрібно від поточного року відняти рік вступу до вузу. Поточний рік отримаєте самостійно (читати документацію!!!).
// // // Приклад ініціалізації екземпляру класа:
// // const student = new Student('Петрик', 'Пяточкин', 2019);

// // student.getFullName(); //поверне 'Петрик Пяточкин'
// // student.getCourse();   //поверне 3 (третій курс)

class User {
  #name;
  #surname;

  constructor(name, surname, yearOfAdmission) {
    this.#name = name;
    this.#surname = surname;
    this.yearOfAdmission = yearOfAdmission;
  }
  getFullName() {
    return `${this.#name} ${this.#surname}`;
  }
  getCourse(yearOfAdmission) {
    let course = 1;
    const currentYear = new Date(Date.now()).getFullYear();
    course += currentYear - yearOfAdmission;
    return course;
  }
}

class Student extends User {}

const student = new Student('Петрик', 'Пяточкин', 2019);

console.log(student);
