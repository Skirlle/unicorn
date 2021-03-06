/*Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let middle = styles.length%2;
if( middle !== 0){
  Math.round(middle);
  styles[middle] = 'Классика';
} else {
  styles[(styles.length)/2] = 'Классика';
}
console.log(styles.shift());
styles.unshift('Рэп','Регги');

/*
Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput(){
    let value, arr = [];
    while(true){
      value = +prompt('Введите значение', 0);
      if((isNaN(value)) || typeof(value) !== "number"){
        console.log('Не число');
        break;
    } else{
      arr.push(value);
    }
  }
    console.log(arr);
    return arr;
  }
  
  sumInput();



  /* 
  Создайте страницу, которая спрашивает имя у пользователя и выводит его.
  */

 let UserName = prompt('Как вас зовут?');
 if(UserName === null){
     alert('Вы не ввели ваше имя');
 } else{
     alert(UserName);
 }



/*
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

let name = prompt('Какое «официальное» название JavaScript?');
if(name == 'ECMAScript'){
    alert('Верно');
}else{
    alert('Не знаете? ECMAScript!');
}



/*
    Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.

Предполагается, что пользователь вводит только числа.
*/

let number = +prompt('Введите число', 0);
if(number > 1){
    alert(1);
}else if(number < 0){
    alert(-1);
} else{
    alert(0);
}


/*
Перепишите if с использованием условного оператора '?':

let result;
if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

let result = (a+b < 4) ? 'Мало' : 'Много';


/*
    Перепишите if..else с использованием нескольких операторов '?'.
    Для читаемости рекомендуется разбить код на несколько строк.

let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

*/

let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор')  ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' :
                              '';


/*
Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

«Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/


let age;
if(age >= 14 && age <= 90){
    alert('Hey');
}


/*
Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

let age;
if(age<14 || age>90){
    alert('Hey');
}
if(!(age>=14 && age<=90)){
    alert('Hey');
}



/*
Напишите скрипт, который считает количество секунд в часе.
*/
let secOnHour = 60**2;

/*
Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
*/

let secOnDay = (60**2)*24,
    secOnMonth = ((60**2)*24)*30;


/*
Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.

var num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);
*/

var num = 47;
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
alert(num);



/*
Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), 
шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s
*/

let height = 23,
    width = 10,
    s;

/*
При помощи цикла for выведите чётные числа от 2 до 10.
*/

for(let i = 2; i <=10;i++){
    if(i%2 == 0){
      console.log(i);
    } else continue;
  }


/*
Максимум
Даны два массива разной длины, необходимо найти повторяющийся в обоих массивах наибольший элемент.
*/

let arr1 = [1,5,19,6],
    arr2 = [1,8,7,5,6,1];
function getMax(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
        if(max > arr3[i]){
          continue;
        } else if(max <= arr[i]){
          max = arr[i];
        }
      }
  return max;
      }
function  getMaxReplay(arr1, arr2){
  let arr3 = [];
   for(let i = 0; i < arr1.length; i++){
     for(let j = 0; j < arr2.length; j++){
       if(arr1[i] == arr2[j]){
         arr3.push(arr2[j]);
       }
     }
   }
  return getMax(arr3);
}
console.log(getMaxReplay(arr1,arr2));

/*
Матрица
Написать функцию, которая принимает две квадратные матрицы одинаковой размерности и возвращает их произведение.
*/