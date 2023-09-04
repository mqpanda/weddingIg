// Задаем целевую дату
const targetDate = new Date("October 1, 2023 15:30:00");

// Функция обновления таймера
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Рассчитываем оставшееся время
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Обновляем значения в столбиках
    document.getElementById("days").textContent = days;
    document.getElementById("days-label").textContent = getWordForm(days, ["день", "дня", "дней"]);

    document.getElementById("hours").textContent = hours;
    document.getElementById("hours-label").textContent = getWordForm(hours, ["час", "часа", "часов"]);

    document.getElementById("minutes").textContent = minutes;
    document.getElementById("minutes-label").textContent = getWordForm(minutes, ["минута", "минуты", "минут"]);

    document.getElementById("seconds").textContent = seconds;
    document.getElementById("seconds-label").textContent = getWordForm(seconds, ["секунда", "секунды", "секунд"]);
}

// Функция для склонения слова в зависимости от числа
function getWordForm(number, forms) {
    let form;
    if (number % 10 === 1 && number % 100 !== 11) {
        form = forms[0];
    } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
        form = forms[1];
    } else {
        form = forms[2];
    }
    return form;
}

// Обновляем таймер каждую секунду
setInterval(updateCountdown, 1000);

