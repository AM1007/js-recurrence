/*
Синхронний vs Асинхронний JS

Стек виклику функцій (http://latentflip.com/loupe/)
window.setTimeout(callback, delay)
window.setInterval(callback, delay)
Очищення інтервалів та таймаутів clearInterval(intervalID), clearInterval(timeoutID)
*/

console.log('First');
setTimeout(() => {
  console.log('From set timeout');
}, 2000);
console.log('Second');
