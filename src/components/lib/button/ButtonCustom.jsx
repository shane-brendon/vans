import styles from "./button.module.scss";

function ButtonCustom({ isFill, text, type = "btn " }) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${isFill ? styles.fill : ""}`}
    >
      {text}
    </button>
  );
}

export default ButtonCustom;
