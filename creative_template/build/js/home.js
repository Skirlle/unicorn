let arr_length,
    arr = [],
    text = '';
console.log(arr);
arr_length = prompt('Введите длину массива', 0);
Number(arr_length);
for(i = 0; i<arr_length; i++){
  text = prompt('Введите текст');
  if((text.length-1)>10){
    console.log(text.length);
    arr.push(text);
    text = '';
    console.log(text.length);
  }else if(text.length < 10){
    text += prompt('Введите ещё');
  }
  console.log(i);
};
console.log(arr);