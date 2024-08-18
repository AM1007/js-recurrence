/*
LocalStorage
*/

// console.log(window.localStorage);

/*
Збереження
Чому потрібно використовувати метод JSON.stringify 
*/

const item = {
  title: 'Some item',
  description: 'Lorem ipsum dolor sit amet.',
  price: 5000,
};

// localStorage.setItem('item-info', JSON.stringify(item));
// localStorage.setItem('test', 'Hello World');

/*
Читання
Чому потрібно використовувати метод JSON.parse
*/

// const itemInfoFromLs = JSON.parse(localStorage.getItem('item-info'));
// console.log(itemInfoFromLs);

// console.log(localStorage.getItem('test'));

/*
Всі об'єкти LS
*/
// console.log(Object.keys(localStorage));

/*
Видалення
*/

// localStorage.clear();
// localStorage.removeItem('test');

/*=================================
SessionStorage
=================================*/

// console.log(window.sessionStorage);

// sessionStorage.setItem('item-info', JSON.stringify(item));
// console.log(JSON.parse(sessionStorage.getItem('item-info')));

// sessionStorage.removeItem('item-info');
