JS: Введение в ООП

# Контекст (This)

Для полноценного изучения ООП в JS необходимо разобрать понятие контекста `this`. На его базе строится почти все остальное, включая то, как работают методы и классы.

Контекст по-разному работает для обычных и стрелочных функций.

```javascript
// Определение стрелочной функции и присваивание константе
const f = () => 'i am an arrow function';

// Определение обычной анонимной функции
function() {
  return 'i am a regular function without name';
}

// Определение обычной именованной функции
function f() {
  return 'i am a regular function with name';
}
```

Обычные именованные и анонимные функции работают с контекстом одинаково.

В JS функции ведут себя как данные: их можно записывать в переменные, константы и даже в свойства объектов. Функции, записанные внутрь свойств объектов, называют **методами**:

```javascript
const company = { name: 'Hexlet' };
// Создание функции, которая сразу же присваивается свойству getName и становится методом
company.getName = function () {
  return 'Hexlet';
};

// Вызов метода
company.getName(); // "Hexlet"
```

Другие примеры добавления функции в объект:

```javascript
// При создании объекта
const obj = {
  getName: function () {
    return 'Hexlet';
  },
};

// Через присваивание константы
const company = { name: 'Hexlet' };

function getHexlet() {
  return 'Hexlet';
}
// Имя не принципиально
company.getName = getHexlet;

company.getName(); // "Hexlet"
```

Все варианты выше эквивалентны и приводят к одному результату, но есть загвоздка. Метод возвращает строку и никак не использует данные объекта. Если изменить имя, то метод продолжит возвращать "зашитое" в него значение, а не текущее имя компании внутри объекта.

```javascript
company.getName(); // "Hexlet"
company.name = 'Hexlet Plus';
// Имя поменяли, но возврат остался прежний
company.getName(); // "Hexlet"
```

Для решения этой задачи, нам нужно получить доступ к данным объекта внутри метода. Делается это через специальное ключевое слово `this`, называемое контекстом. Внутри методов оно ссылается на текущий объект, к которому привязан метод.

```javascript
const company = { name: 'Hexlet', employees: [] };

company.getName = function getName() {
  return this.name;
};

company.getName(); // "Hexlet"
company.name = 'Hexlet Plus';
company.getName(); // "Hexlet Plus"
```

`this` дает возможность не только читать данные, но и менять их:

```javascript
company.setName = function setName(name) {
  this.name = name;
};

company.getName(); // "Hexlet"
company.setName('Hexlet Plus');
company.getName(); // "Hexlet Plus"
```

Другой пример — изменение внутреннего массива в объекте:

```javascript
// Добавление нового сотрудника
company.addEmployee = function addEmployee(user) {
  // Важно, что на момент вызова, employees уже добавлен в company
  this.employees.push(user);
};

const user = { name: 'Petya' };
company.addEmployee(user);
company.employees; // [{ name: 'Petya' }]

// Или через метод

company.getEmployees = function () {
  return this.employees;
};

company.getEmployees(); // [{ name: 'Petya' }]
```

Свойства можно менять и напрямую и из методов. Выбор способа зависит от ситуации. С опытом вы начнете лучше понимать, какой способ предпочесть.

## Контекст

Ранее мы говорили, что `this` ссылается на текущий объект, к которому привязан метод. И здесь кроется ключевое отличие `this` в JavaScript от `this` в других языках. В JavaScript `this` у метода может измениться:

```javascript
const company1 = {
  name: 'Hexlet',
  getName: function getName() {
    return this.name;
  },
};

const company2 = { name: 'Hexlet Plus' };

company1.getName(); // "Hexlet"

company2.getName = company1.getName;

// В обоих случаях одна и та же функция
company2.getName(); // "Hexlet Plus"
company1.getName(); // "Hexlet"
```

Что здесь произошло? Вызов той же самой функции из другого объекта привел к смене объекта, на который ссылается this. Эта особенность называется поздним связыванием. Значение `this` ссылается на тот объект, из которого происходит вызов метода.

Легче понять эту особенность, познакомившись с тем, как вызываются функции внутри самого JavaScript и откуда там берется `this`. Так как в JS функции — это тоже объекты, то у них есть свои методы. Среди них есть метод `call()`, который используется для вызова:

```javascript
const sayHi = () => 'Hi!';
sayHi.call(); // "Hi!"
```

Зачем так сделано? Дело в том, что первым параметром `call()` принимает контекст - объект, на который и будет ссылаться `this` внутри функции. Функции для этого не обязательно быть методом:

```javascript
const getName = function getName() {
  return this.name;
};

const company1 = { name: 'Hexlet' };
// Функция вызывается напрямую, она не является методом
getName.call(company1); // "Hexlet"

const company2 = { name: 'Hexlet Plus' };
getName.call(company2); // "Hexlet Plus"
```

В примере выше мы заменили контекст функции `getName()` с помощью `call()`, передав в него новый контекст.

Следовательно `this` - это контекст, который JS прокидывает автоматически в функцию, если она вызывается как метод. В этом случае можно точно сказать, к какому объекту она принадлежит.

Теперь, когда вы знаете как работает this, попробуйте ответить на вопрос, что будет выведено на экран?

```javascript
const company = {
  name: 'Hexlet',
  country: {
    name: 'Finland',
    getName: function getName() {
      return this.name;
    },
  },
};

console.log(company.country.getName()); // => ?
```

Правильный ответ: `Finland`. Потому что контекстом для метода `getName()` является объект `country`, а не `company`. Если немного модифицировать код, то понять эту идею станет проще:

```javascript
const { country } = company;
console.log(country.getName()); // "Finland"
```

## Сокращенное определение методов

В JS существует специальный сокращенный синтаксис создания методов при определении объектов:

```javascript
const company = {
  name: 'Hexlet',
  getName() {
    return this.name;
  },
  // То же самое что
  // getName: function getName() {
  //   return this.name;
  // },
};
```

Такой способ – всего лишь "синтаксический сахар". Он позволяет сделать запись короче, но не меняет поведение. Главное запомните – это обычная функция, а не стрелочная. В дальнейшем мы будем использовать именно такое определение.
