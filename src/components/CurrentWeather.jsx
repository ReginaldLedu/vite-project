/* eslint-disable react/prop-types */
import styles from "./CurrentWeather.module.css";

export const CurrentWeather = (props) => {
  console.log(props.currentWeather);
  console.log(`.src/assets/${props.currentWeather.icon}.png`);
  return (
    <>
      {props.currentWeather.hours !== undefined ? (
        <>
          <h1 className={styles.currentWeather_title}>Погода сейчас</h1>
          <div className={styles.currentWeather_box}>
            <img
              className={styles.currentWeather_img}
              src={`./src/assets/${props.currentWeather.icon}.png`}
              alt=""
            />
            <div className={styles.currentWeather_temp}>
              {props.currentWeather.temperature}
              {String.fromCharCode(176) + "C"}
            </div>
          </div>
          <div className={styles.currentWeather_feels}>
            Ощущается как <pre />
            {props.currentWeather.temperatureFeelsLike}
            {String.fromCharCode(176) + "C"}
          </div>
          <div className={styles.currentWeather__rest}>
            <p className={styles.currentWeather__item}>
              Давление {props.currentWeather.pressure} мм.рт.ст
            </p>
            <p className={styles.currentWeather__item}>
              Влажность {props.currentWeather.humidity} %
            </p>
            <p className={styles.currentWeather__item}>
              Скорость ветра {props.currentWeather.wind} м/с
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
