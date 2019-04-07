/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

// ============================================================================================
// // function checkNumberType(num) {
// // return num % 2 === 0 ? "Odd" : "Even"

// // }
// // console.log(checkNumberType(2)); // 'Even'

// // console.log(checkNumberType(46)); // 'Even'

// // console.log(checkNumberType(3)); // 'Odd'

// // console.log(checkNumberType(17)); // 'Odd'
// =============================================================================================


/*
  Напиши функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ка
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

// function formatString(str) {
//     if (str.length < 40) {
//         return str
//     }
//     if (str.length > 40) {
//         return (`${str.slice(0, 39)}...`);
//     }
// }

// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//     formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка
// ===============================================================================================================


/*
  Напиши функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
// `use strict`

// function checkForSpam(str) {
//     let lowerCase = str.toLowerCase();
//     return (lowerCase.includes("sale") || lowerCase.includes("spam"))
// }


// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ===========================================================================================================


/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки
// `use strict`


// console.log(getPx("10px") === 10); // true
// console.log(getPx("10.5") === 10.5); // true
// console.log(getPx("0") === 0); // true
// console.log(getPx(-1)); // null
// console.log(getPx(10)); // null