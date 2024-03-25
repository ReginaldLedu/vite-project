/* eslint-disable react/prop-types */

import styles from "./Search.module.css";
export const Search = (props) => {
  return (
    <div className={styles.search__box}>
      <input
        className={styles.search__input}
        type="text"
        placeholder="Введите город"
        value={props.city}
        onChange={(e) => {
          props.setCity(e.target.value);
        }}
      />
      <button className={styles.search__button} onClick={props.onClick}>
        Узнать погоду
      </button>
    </div>
  );
};
