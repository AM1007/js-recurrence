// Створення нової дати

// const date = new Date('2024-07-22T12:30:00');
// console.log(date);
// Виклик класу Дейт без вказаних аргументів призведе до виведеня поточної дати.

// Числовий формат
// const date = new Date(2024, 6, 22, 12, 30, 0, 0);
// console.log(date);

// Створення нової дати
// const date = new Date('2024-07-22');

// console.dir(date);

// Методи дати
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// date.setFullYear(2025);
// console.log(date);

// const date = new Date('2022-09-09T03:12:00');
// const date = new Date(2022, 8, 9, 3, 12);
// console.log(date);

// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   const day = date.getDay();

//   return days[day];
// };

// const date = new Date('2023-09-14');
// console.log(date);

// console.log(getWeekDay(date));

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month);

//   return date;
// };

// console.log(getLastDayOfMonth(2012, 1));

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);
//   return date;
// };

// console.log(getLastDayOfMonth(2012, 1));

// const getSecondsToTomorrow = () => {
//   const now = new Date();
//   const tomorrow = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1
//   );

//   return (tomorrow - now) / 1000;
// };

// console.log(getSecondsToTomorrow());
