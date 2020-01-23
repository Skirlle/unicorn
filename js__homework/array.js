let arr = [],
    arr_length,
    text = '';

arr_length = prompt('Введите количество элементов в массиве', 0);

text_acc = function(){
  text = prompt('Введите текст');
  for(; (text.length) < 10; ){
    text += prompt(`Не хватает ${10 - text.length} символов`);
  }
}
for(let i = 0; i < arr_length; i++){
  text_acc();
  arr.push(text);
}

arr = arr.sort();