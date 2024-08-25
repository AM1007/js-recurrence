const timer = {
  deadline: new Date('2024-08-23T12:00:00'),
  elements: {
    days: document.querySelector('.js-timer__days'),
    hours: document.querySelector('.js-timer__hours'),
    minutes: document.querySelector('.js-timer__minutes'),
    seconds: document.querySelector('.js-timer__seconds'),
  },

  start() {
    setInterval(() => {
      const diff = this.deadline.getTime() - new Date();

      const { days, hours, minutes, seconds } = this.getTimeComponents(diff);

      this.elements.days.textContent = days;
      this.elements.hours.textContent = hours;
      this.elements.minutes.textContent = minutes;
      this.elements.seconds.textContent = seconds;
    }, 1000);
  },
  stop() {},

  getTimeComponents(diff) {
    const days = Math.floor(diff / 1000 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
};

timer.start();

console.log(timer.elements);
