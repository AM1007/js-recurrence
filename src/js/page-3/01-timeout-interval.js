/*
Синхронний vs Асинхронний JS

Стек виклику функцій (http://latentflip.com/loupe/)
window.setTimeout(callback, delay)
window.setInterval(callback, delay)
Очищення інтервалів та таймаутів clearInterval(intervalID), clearInterval(timeoutID)
*/

// console.log('First');

// const timeoutId = setTimeout(() => {
//   console.log('From set timeout');
// }, 5000);
// console.log('Second');

// document.addEventListener('click', () => {
//   clearTimeout(timeoutId);
// });

const intervalId = setInterval(() => {
  console.log('From setInterval');
}, 1000);

clearInterval(intervalId);
