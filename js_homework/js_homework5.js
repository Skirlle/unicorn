/*
Задача 1

В коде ниже класс Rabbit наследует Animal.
К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    this.name = name;    ******************super(name)
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);
*/

/*
Задача  3

Написать класс Cat, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). 
Класс Cat имеет метод meow (возвращает строку “Cat {catname} is sayig meow”.
Пример использования:
var cat = new Cat(‘garfield’);
cat.getName() === ‘garfield’; // true
cat.meow() === ‘Cat garfield is saying meow’; // true
*/

class Animal {
    constructor(name){
      this.name = name;
    }
    getName(){
      console.log(this.name);
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
    meow(){
      console.log('Cat ' + this.name + ' is saying meow');
    }
  }
  
  let garfield = new Cat('garfield');
  
  garfield.meow();

/*
Задача 4

Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.

Например:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator() {
    this.read = function() {
      this.number1 = +prompt('num1', 0);
      this.number2 = +prompt('num2', 0);
    };
  
    this.sum = function() {
      return this.number1 + this.number2;
    };
  
    this.mul = function() {
      return this.number1 * this.number2;
    };
  }
  
  let calculator = new Calculator();
  calculator.read();
  
  console.log("Sum = " + calculator.sum());
  console.log("Mul = " + calculator.mul());
