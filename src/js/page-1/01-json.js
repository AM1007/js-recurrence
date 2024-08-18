/*
Метод JSON.stringify(value) щоб запакувати
Метод JSON.parse(value) щоб розпакувати
*/

// const user = {
//   firstName: 'Andr',
//   lastName: 'Motko',
//   age: 49,
//   isAdult: true,

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const userJson = JSON.stringify(user);

// console.log(user);
// console.log(userJson);
// console.log(JSON.parse(userJson));

// const number = 5;

// console.log(typeof JSON.stringify(number));

// const users = [
//   {
//     firstName: 'Andr',
//     lastName: 'Motko',
//     age: 49,
//     isAdult: true,
//   },
//   {
//     firstName: 'Paul',
//     lastName: 'Goodvin',
//     age: 32,
//     isAdult: false,
//   },
//   {
//     firstName: 'Ian',
//     lastName: 'Watson',
//     age: 15,
//     isAdult: true,
//   },
// ];

// const usersJson = JSON.stringify(users);

// console.log(usersJson);

/*
===========================================
Конструкція try...catch для обробки помилок
===========================================
*/

// console.log('start');

// try {
//   const jsonUser = "{firstName: 'Andrew', lastName: 'Motko',}";

//   const user = JSON.parse(jsonUser);
//   console.log(user);
// } catch (err) {
//   console.log(err);
// }

// console.log('end');
