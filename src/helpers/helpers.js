export const getData = (object) => {
  const months = {
    Mar: "марта",
    Apr: "апреля",
    May: "мая",
    Jun: "июня",
    Jul: "июля",
    Aug: "августа",
    Sep: "сентября",
    Oct: "октября",
    Nov: "ноября",
    Dec: "декабря",
    Jan: "января",
    Feb: "февраля",
  };
  const weekdays = {
    Sun: "Воскресенье",
    Mon: "Понедельник",
    Tue: "Вторник",
    Wed: "Среда",
    Thu: "Четверг",
    Fri: "Пятница",
    Sat: "Суббота",
  };
  let date = new Date(object.dt * 1000);
  const hours = date.getHours();
  const weatherObj = {};
  const str = date.toDateString();
  let weekday = str.slice(0, 3);
  let month = str.slice(4, 7);
  let day = str.slice(8, 10);
  weatherObj.hours = hours;
  weatherObj.temperature = Math.round(object.main.temp - 273.15);
  weatherObj.temperatureFeelsLike = Math.round(object.main.feels_like - 273.15);
  weatherObj.pressure = Math.round(object.main.pressure / 1.33);
  weatherObj.humidity = object.main.humidity;
  weatherObj.wind = Math.round(object.wind.speed);
  weatherObj.icon = object.weather[0].main;
  weatherObj.date = `${weekdays[weekday]}, ${day} ${months[month]}`;
  return weatherObj;
};
