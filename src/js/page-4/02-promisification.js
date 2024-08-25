// // Запит за користувачем на колбеках

// const fetchUserByName = name => {
//   const promise = new Promise((resolve, reject) => {
//     console.log('Робимо запит на сервер');

//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.5;

//       if (isSuccess) {
//         const user = {
//           firstName: name,
//           lastName: 'Francis',
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject(`Користувача ${name} не знайдено`);
//       }
//     }, 2000);
//   });
//   return promise;
// };

// fetchUserByName('Ida')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
