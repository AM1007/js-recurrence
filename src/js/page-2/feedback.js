/*
Заповнення полів форми з Local Storage
*/

// Отримуємо елемент форми з класом 'js-feedback-form' і зберігаємо його у змінну feedbackFormEl.
const feedbackFormEl = document.querySelector('.js-feedback-form');

// Ініціалізуємо порожній об'єкт formData для збереження даних форми.
const formData = {};

// Функція для заповнення полів форми значеннями з локального сховища (localStorage).
const fillFormFields = form => {
  // Отримуємо дані з localStorage, які збережені під ключем 'feedback-form-data', і парсимо їх з JSON у об'єкт.
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  // Якщо дані з localStorage відсутні, функція завершить роботу (нічого не буде заповнювати).
  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  // Перебираємо кожен ключ у збережених даних з localStorage.
  for (const key in formDataFromLS) {
    // Перевіряємо, чи даний ключ є власним властивістю об'єкта (виключаємо успадковані властивості).
    if (formDataFromLS.hasOwnProperty(key)) {
      // Заповнюємо відповідне поле форми значенням із збережених даних.
      form.elements[key].value = formDataFromLS[key];
    }
  }
};

// Викликаємо функцію для заповнення полів форми значеннями з localStorage при завантаженні сторінки.
fillFormFields(feedbackFormEl);

// Функція для обробки змін у полях форми.
const onFormFieldChange = event => {
  // Отримуємо ім'я поля, яке було змінено.
  const fieldName = event.target.name;
  // Отримуємо нове значення цього поля.
  const fieldValue = event.target.value;

  // Оновлюємо об'єкт formData новим значенням для відповідного поля.
  formData[fieldName] = fieldValue;
  // Зберігаємо оновлений об'єкт formData у localStorage у вигляді рядка JSON.
  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

// Функція для обробки події надсилання форми (submit).
const onFeedbackFormSubmit = event => {
  // Зупиняємо стандартну поведінку форми (відправка даних і перезавантаження сторінки).
  event.preventDefault();

  // Очищаємо всі поля форми, повертаючи їх до початкового стану.
  event.target.reset();

  // Видаляємо збережені дані форми з локального сховища (localStorage).
  localStorage.removeItem('feedback-form-data');
};

// Додаємо обробник події 'change' до форми, який викликає onFormFieldChange при зміні будь-якого поля форми.
feedbackFormEl.addEventListener('change', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);

// Недоліком способу є те, що при оновлені сторінки і оновлені даних оновлення даних яке призводить до перезапису даних в Local Storage
