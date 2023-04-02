Основы JavaScript

# Упрощенный синтаксис функций

## Вопросы

1. Когда можно не писать слово return для возврата результата из функции?

   > Когда используется сокращенный синтаксис

2. Во всех ли версиях языка доступен сокращенный синтаксис определения функции?

   > Начиная с версии es6

## Упражнение

`capitalize.js`

Реализуйте функцию `capitalize()`, которая принимает непустую строку и приводит первую букву строки к верхнему регистру:

```javascript
const name = 'arya';
console.log(capitalize(name)); // => "Arya"
```

Чтобы получить подстроку (или символ) из строки, используйте метод `slice()`:

```javascript
'welcome'.slice(2, 5); // "lco"
```

Для приведения строки к верхнему регистру используйте метод `toUpperCase()`

```javascript
'welcome'.toUpperCase(); // "WELCOME"
```