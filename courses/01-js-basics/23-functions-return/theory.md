Основы JavaScript

# Возврат значений

Рассмотрим задачу обработки электронной почты. Когда пользователь регистрируется на каком-то сайте, то он может ввести email любым способом:

- Добавив случайно пробелы `_support@hexlet.io__`
- Использовав буквы в разном регистре `SUPPORT@hexlet.io`

Предварительно, email нужно подготовить к записи в базу - привести к нижнему регистру и обрезать пробельные символы по краям строки:

```javascript
const saveEmail = () => {
  // В реальности email приходит из формы
  const email = '  SuppORT@hexlet.IO';
  // обрезаем пробельные символы
  const trimmedEmail = email.trim();
  const preparedEmail = trimmedEmail.toLowerCase();
  console.log(preparedEmail);
  // здесь будет запись в базу данных
};
```

Методы `trim()` и `toLowerCase()` ничего не печатают на экран (в консоль), они возвращают результат своей работы и мы присваиваем его константе.

Напишем функцию `greeting()`, чтобы она возвращала данные:

```javascript
const greeting = () => {
  return 'Hello, Hexlet!';
};
```

`return` – инструкция, которая берет выражение, записанное справа, и отдает его наружу, тому коду, который вызвал функцию. Как только JavaScript натыкается на `return`, выполнение функции на этом завершается.

```javascript
// Теперь мы можем использовать результат работы функции
const message = greeting();
console.log(message); // => Hello, Hexlet!
// И даже выполнить какие-то действия над результатом
console.log(message.toUpperCase()); // => HELLO, HEXLET!
```

```javascript
// Код после return не выполняется
const greetingWithCodeAfterReturn = () => {
  return 'Hello, Hexlet!';
  console.log('Я никогда не выполнюсь');
};
```

Кроме возврата данных мы можем и печатать:

```javascript
const greetingWithReturnAndPrinting = () => {
  console.log('Я появлюсь в консоли');
  return 'Hello, Hexlet!';
};

// И напечатает текст на экран и вернет значение
const message = greetingWithReturnAndPrinting();
```

Так как `return` работает с выражениями, то справа от него может появиться почти все что угодно:

```javascript
const greeting = () => {
  const message = 'Hello, Hexlet!';
  return message;
};
```

Здесь мы не возвращаем переменную, возвращается всегда значение, которое находится в этой переменной. Ниже пример с вычислениями:

```javascript
const doubleFive = () => {
  // или return 5 + 5
  const result = 5 + 5;
  return result;
};
```

Вопрос на самопроверку. Что вернет вызов функции `run()`, определенной ниже?

```javascript
// Определение
const run = () => {
  return 5;
  return 10;
};

// Что будет выведено на экран?
console.log(run());
```
