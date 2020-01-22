// 1 Задание
let admin,name;
name = "John";
admin = name;
alert(admin);

// 2 Задание
if(a==10){
  alert("Верно");
}else{
  alert("Неверно");
}

// 3 Задание
let num = 3;
alert(num);

// 4 Задание
let a = 10,
    b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

// 5 Задание
let c = 15,
    d = 2,
    result;
result = c + d;
alert(result);

// 6 Задание
let a = 10,
    b = 2,
    c = 5;
alert(a + b + c);

// 7 Задание
let a = 17,
    b = 10,
    c = a - b,
    d = 7,
    result = c + d;
alert(result);

// 8 Задание
let str = "Привет Мир";
alert(str);

// 9 Задание
let str1 = "Привет,",
    str2 = "Мир";
alert(str1 + str2);

// 10 Задание
let name = "Слава";
alert(`Привет ${name}`);

// 11 Задание
let age = 24;
alert(`Мне ${age} года`);

// 12 Задание
let str = "abcde";
console.log(str[0]);
console.log(str[2]);
console.log(str[4]);

// 13 Задание
let num = "12345",
    summ = 1;
for(let i = 0; i <= num.length - 1; i++){
  summ *= +num[i];
}
console.log(summ);

// 14 Задание
let hour = "18",
    minute = "35",
    second = "55";
console.log(`${hour}:${minute}:${second}`);

// 15 Задание
let a = 5;
console.log(a**2);

// 16 Задание
let m = 3,
     n;
if(m > 50){
  n = "Большое";
}else{
  n = "Маленькое";
}

// 17 Задание
let a1 = 5 + 3,
    a2 = 5 - 3,
    a3 = 5 * 3,
    a4 = 5 / 3;

// 18 Задание
let a6 = 5 % 3,
    a7 = 3 % 5,
    a8 = 5 + '3',
    a9 = '5' - 3,
    a10 = 75 + 'кг';

// 19 Задание
let str = "Привет",
    num = 123,
    flag = true,
    txt = "true";
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(flag));
console.log(typeof(txt));