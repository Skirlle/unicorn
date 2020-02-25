// 1 Задание
function Animal() {
}

Animal.prototype.getName = function() {
  console.log(this.name);
}

function Cat(name) {
  this.name = name;
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.meow = function() {                      //Почему если поставить перед предыдущей строчкой, ошибка meow is not a function
  console.log( this.name + ' is say Meow');
}

let cat = new Cat('garfield');

cat.getName();
cat.meow();

// 2 Задание

function User(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  
  User.prototype.getFullName = function() { 
    console.log(this.name + ' ' + this.surname);
  }
  
  User.prototype.healCorn = function() {
    console.log('Коронавирус никогда не победит');
  }
  
  function Student(name, surname, year) {
    let student = new User(name, surname);
    student.year = year;
    student.getCourse = function() {
      console.log(2020 - this.year);
    }
    return student;
  }
  
  let s = new User('aaa', 'bbbb');
  let stu = new Student('Ivan', 'Aaa', 2016);
  stu.getFullName();
  stu.healCorn();