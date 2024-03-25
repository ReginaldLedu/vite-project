/* eslint-disable react/prop-types */

import styles from "./Item.module.css";

export const Item = (props) => {
  return (
    <div className={styles.topPanel__carousel_item}>
      <p className={styles.carousel__item_date}>{props.item.date}</p>
      <img
        src={`/vite-project/src/assets/${props.item.icon}.png`}
        alt="#"
        className={styles["carousel__item_img"]}
      />
      <div className={styles.carousel__item_box}>
        <p className={styles.tempeature__title}>Температура</p>
        <p className={styles.tempeature__text}>
          {props.item.temperature} {String.fromCharCode(176) + "C"}
        </p>
      </div>
      <div className={styles.carousel__item_box}>
        <p className={styles.tempeature__title}>Ощущается как</p>
        <p className={styles.tempeature__text}>
          {props.item.temperatureFeelsLike} {String.fromCharCode(176) + "C"}
        </p>
      </div>
      <div className={styles.carousel__item_box}>
        <p className={styles.tempeature__title}>Влажность</p>
        <p className={styles.tempeature__text}>{props.item.humidity} %</p>
      </div>
      <div className={styles.carousel__item_box}>
        <p className={styles.tempeature__title}>Давление</p>
        <p className={styles.tempeature__text}>
          {props.item.pressure} мм.рт.ст
        </p>
      </div>
      <div className={styles.carousel__item_box}>
        <p className={styles.tempeature__title}>Скорость ветра</p>
        <p className={styles.tempeature__text}>{props.item.wind} м/с</p>
      </div>
    </div>
  );
};
