import article from "./hbs/article.hbs"
//! Завдання 1
//? Створіть новий проєкт з використанням Parcel та бібліотеки Handlebars.
//! Завдання 2
//? Створіть масив об'єктів з даними, що ви хочете відобразити на сторінці.Наприклад, це може бути список користувачів, товарів або будь-якої іншої інформації.

const array = ["Asics", "Nike", "Puma", "Mizuno", "Adidas", "Haka"]

//! Завдання 3
//?Створіть шаблон з використанням синтаксису Handlebars, який відображатиме ці дані. Наприклад, шаблон може містити таблицю з різними полями, або список елементів з інформацією про кожен з них.

//! Завдання 4
//? Використовуючи плагін parcel-transformer-hbs, попередньо скомпілюйте ваш шаблон у файл JavaScript.

const data = {
    name: array.name,
    
  };
  document.body.innerHTML = ar(data);