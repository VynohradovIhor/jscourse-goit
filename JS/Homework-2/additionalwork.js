/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить первый элемент массива
// 'use strict'
// const users1 = ["Poly", "Ajax", "Chelsey"];
// users1.shift(0);
// console.log(users1);


// Удалить последний элемент массива
// const users = ["Poly", "Ajax"];
// users.pop();
// console.log(users);


// // Добавить в начало массива пользователя "Lux"

// const users = ["Poly", "Ajax"];
// users.unshift('Lux');
// console.log(users);


// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// const users = ["Lux", "Poly", "Ajax"];
// users.push("Jay", "Kiwi");
// console.log(users);


// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]
// const userToDelete = ["Lux", "Poly", "Ajax", "Jay", "Kiwi"];
// userToDelete.splice(2, 1);
// console.log(userToDelete);

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
// const users = ["Lux", "Poly", "Jay", "Kiwi"];
// const userToInsertBefore = "Jay";
// users.splice(2, 0, "Kong");
// console.log(users);


// 'use strict'
// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/*
 * Есть массив имен пользователей users
 *
 * Напиши цикл, который для каждого пользователя будет выводить в консоль
 * сообщение в формате [номер элемента] - [значение элемента]. 
 * 
 * Нумерация должна начинаться с 1. К примеру для первого элемента массива
 * с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
 *
 * Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
 */
// 'use strict'
// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let i=0;
// while (i<users.length) {
//     console.log(`${i+1} -`, users[i]);
//     i += 1
// }




/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// // В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// // Выведи в консоли длину массива words
// console.log(); // 8

// // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// console.log(price); // 80

// const message = "Proin sociis natoque et magnis parturient montes mus";
// console.log(message.split(" "));
// const words = message.split(" ");
// console.log(words);
// console.log(words.length);
// let i=0;
// const oneWord=10;
// let price = words.length*oneWord;
// console.log(price)




/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/

// let userChoice;
// while (true) {
// userChoice=prompt("Введите число больше 100")

// if (userChoice === null) break;

//   userChoice = Number(userChoice);

//   const isValid = userChoice >= 100;

//   if (isValid) break;
// }; 



/*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = []; numbers.slice

// console.log(matched); // [17, 14, 14, 32, 18, 26]

// 'use strict'
// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];
// for (let i = 0; i < numbers.length; i += 1) {
//   if(numbers[i]>num) {
//     matched.push(numbers[i])
//   };
// };
// console.log(matched)

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// const messageArray = message.split(" ");
// console.log(messageArray);
// let longestWord;
// for (let i = 0; i < messageArray.length; i += 1) {
//     if () {
//         console.log(longestWord)
//     }
// }


/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];