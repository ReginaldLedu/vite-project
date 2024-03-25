import styles from "./Error.module.css";

export const Error = () => {
  return (
    <div className={styles["error-box"]}>
      <p className={styles["error-text"]}>Что-то пошло не так</p>
      <img
        className={styles["error-img"]}
        src="./src/assets/error.png"
        alt="ошибка"
      />
    </div>
  );
};
