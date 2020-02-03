/*
Дана функция ggg. Она требует первым параметром число, вторым функцию, которая возводит в квадрат, 
а третьим параметром функцию, которая возводит в куб. 
Эти функции есть как Function Declaration - kvadrat, kub. Пусть функция ggg вернет сумму квадрата и куба числа.
*/
function ggg(number, square, cube) {
  let summ = square(number) + cube(number);
  return summ;
}

function square(number) {
  return number ** 2;
}

function cube(number) {
  return number ** 3;
}

let a = ggg(5, square, cube);
console.log(a);

/*
Сделайте функцию each, которая первым параметром принимает массив, а вторым - функцию, которая применится к каждому элементу массива. 
Функция each должна вернуть измененный массив
*/
function each(array, func) {
  for(let i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
}

function square(number) {
  return number ** 2;
}

let array = [1,2,3,4,5];
each(array, square);
console.log(array);

/*
Сделайте функцию each, которая первым параметром принимает массив, а вторым - массив функций, которые по очереди применятся к каждому 
элементу массива: к первому элементу массива - первая функция, ко второму - вторая и так далее пока функции в массиве не закончатся, 
после этого возьмется первая функция, вторая и так далее по кругу
*/
function each(array, arrayFunc) {
  for(let i = 0, j = 0; i < array.length; i++, j++) {
    if(j == arrayFunc.length) {
      j = 0;
    }
    array[i] = arrayFunc[j](array[i]);
  }
}

function square(number) {
  return number ** 2;
}

function cube(number) {
  return number ** 3;
}

function doubleSquare(number) {
  return number ** 4;
}

let array = [1,2,3,4,5],
    arrayFunc = [square, cube, doubleSquare];

each(array,arrayFunc);
console.log(array);

/*
Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока не будут
перебраны все числа из этого промежутка. Решите задачу через замыкания - в замыкании должен хранится массив чисел, 
которые уже были сгенерированы функцией.
*/

function randomArray() {
  let array = [],
      currentNumber = 0,
      bool;
  return function() {
    while(true) {
      bool = true;
      currentNumber = Math.round(Math.random() * 100);
      for(let i = 0; i < array.length; i++) {
        if(array[i] == currentNumber) {
          bool = false;
          break;
        }
      }
      if(bool == true) {
        array.push(currentNumber);
      }
      if(array.length == 100) {
        break;
      }
    }
    console.log('********************Рандомный массив**********')
    console.log(array);
    console.log('********************Отсортированный массив**********');
    array.sort(function(a, b){
      return a - b;
    })
    console.log(array);
    array.length = 0;
  }
}

let func1 = randomArray();
func1();
func1();
/*
Сделайте функцию, которая считает и выводит количество своих вызовов.
*/
function count(){
  let count = 0;
  return function() {
    count += 1;
    console.log(count);
  }
}
let a = count();
a();
a();
a();
a();

/* 
    СТЕК
*/
let openBracket = ['{' , '[' , '('],
    closeBracket = ['}' , ']' , ')'],
    stack = [],
    openPos,
    closePos,
    str1 = '{some simbol,{ (sdfgsdf) [serfs]}',
    str2 = str1.split('');

for(let i = 0; i < str2.length; i++) {
  openPos = openBracket.indexOf(str2[i]);
  if(openPos !== -1) {
    stack.push(openPos);
  }
  closePos = closeBracket.indexOf(str2[i]);
  if(closePos !== -1){
    openPos = stack.pop();
    if(openPos !== closePos) {
      console.log('error');
    }
  }
}

if(stack.length != 0){
  console.log('error');
}

