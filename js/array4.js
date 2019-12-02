var inf = {
  name: 'Egor',
  lastName: 'Sarychev',
  age: 17
}

function hello (human) {
  return 'Привет, меня зовут ' + human.name + ' ' + human.lastName + ' и мне ' + human.age + ' лет!';
}

var hello_str = hello(inf);

console.log(hello_str)