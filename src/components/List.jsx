/* eslint-disable react/prop-types */

import styles from "./List.module.css";
import { Item } from "./Item";

export const List = (props) => {
	console.log(props.weather)
  return (
    <div className={styles.topPanel__carousel}>
      {props.weather.length > 0
        ? props.weather.map((weatherObj) => (
            <Item
              key={props.weather.indexOf(weatherObj).toString()}
              item={weatherObj}
            />
          ))
        : " "}
    </div>
  );
};
