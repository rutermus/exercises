Основы JavaScript

# Свойства и методы

В JavaScript свойства встроены прямо в язык. Они указываются с использованием точечного синтаксиса:

```javascript
const name = 'Robb';
const len = name.length;
console.log(len); // => 4
```

Свойства связаны с данными, у которых они берутся. Для примитивных типов все свойства описаны в документации, как например, у [строк](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String). У чисел вообще нет свойств.

JavaScript позволяет обращаться к свойствам, которые не существуют (например, при опечатках). В таком случае их значением является `undefined`:

```javascript
const name = 'Robb';
console.log(name.whatIsThat); // => undefined
```

## Методы

Кроме свойств, у данных существуют **методы** — функции, находящиеся внутри свойств. Метод работает и вызывается как функция, но делает это как свойство, через точку.

```javascript
const name = 'Robb';
const upperName = name.toUpperCase();
console.log(upperName); // => ROBB
```

Встроенные методы оперируют теми данными, с которыми они связаны. Метод `.toUpperCase()` возвращает такую же строку, но преобразуя все символы в верхний регистр. В документации, на первый взгляд, они описаны немного странно: `String.prototype.toLowerCase()`.

Методы есть и у [чисел](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number):

```javascript
const temperature = 22.93;
// Округление до одного знака после запятой
const roundedTemperature = temperature.toFixed(1);
// Метод возвращает строку, которая содержит преобразованное число
console.log(roundedTemperature); // => 22.9

// Напрямую можно вызывать так
(22.93).toFixed(1); // 22.9
```
