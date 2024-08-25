/*
Створення та обробка промісу
- Клас Promise
- resolve
- reject
- then, catch, finally
*/

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     const isOk = Math.random() > 0.5;

//     if (isOk) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// };

// const promise = new Promise(executor);

// console.log(promise);

// promise
//   .finally(() => {
//     console.log('Preloader Stop!');
//   })
//   .then(result => {
//     console.log(result);

//     return 100;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Чи можна перевиконати проміс

// const promise = new Promise((resolve, reject) => {
//   resolve(1);
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

/*
Ланцюжки промисів
- декілька послідовних then
- then повертає проміс
*/
