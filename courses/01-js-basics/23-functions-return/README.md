Основы JavaScript

# Возврат значений

## Вопросы

1. Что такое `return`

   > `return` – инструкция, которая берет выражение, записанное справа, и отдает его наружу, тому коду, который вызвал функцию. Как только JavaScript натыкается на `return`, выполнение функции на этом завершается.

2. С какими значениями работает `return`?

   > Справа от `return` ожидается выражение

## Упражнение

`solution.js`

Реализуйте функцию `sayHurrayThreeTimes()`, которая возвращает строку `hurray! hurray! hurray!`.

```javascript
const hurray = sayHurrayThreeTimes();
console.log(hurray); // => hurray! hurray! hurray!
```
