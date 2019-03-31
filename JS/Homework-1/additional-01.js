/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

// 'use strict'
// const name = "ShieldGenerator";
// let namePrice = 1000;
// namePrice = 2000;
// const message1 = `Выбран ${name}, цена за штуку ${namePrice} кредитов`;
// console.log(message1);

/*
  Есть три переменные содержащие составляющие 
  даты: день, месяц, и год. 
  
  Создай переменную date, в которую 
  запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую 
  запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// 'use strict'
// const day = 17;
// const month = 10;
// const year = 2048;
// const data = `${day}\\${month}\\${year}`;
// const messageData = `Доброе утро, сегодня ${data}, за бортом отличная погода!`;
// console.log(messageData);

/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/
// 'use strict'
// const username = 'Mango';
// const userdate = '14/08/2137';
// const roomType = 'люкс';
// const TogetherMessage = `${username} прибывает на отдых ${userdate} в ${roomType}`
// console.log(TogetherMessage); // Mango прибывает на отдых 14/08/2137 в люкс

/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
    
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/


// 'use strict'
// const correctPassword = 'jqueryismyjam';
// let messagePassword = prompt("Введите пароль доступа");

// if (!messagePassword) {
//     alert('Ожидаю ввода пароля');
// } else if (messagePassword === correctPassword) {
//     alert("Доступ в секретный бункер разрешен!");

// } else(messagePassword !== correctPassword); {
//     alert("Активирована система защиты!");
// }




/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение 
    "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение 
    "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// 'use strict'
// const total = 100;
// const ordered = 50;