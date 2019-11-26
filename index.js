let length=+prompt('Видилете длину');
let arrey=[];
for(let i=0;i<length;i++){
  arrey.push({
    name:prompt(`имя${i}`),
latName:prompt(`фамилия${i}`),
date: prompt(`Введите дату в формате yyyy-mm-dd для пользователя номер ${i}`)
  
  })
}
console.log(arrey);
