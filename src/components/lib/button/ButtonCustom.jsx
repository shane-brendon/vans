import Link from "next/link"
import styles from "./button.module.scss"

function ButtonCustom({ isFill, text, type = "btn", href = "/" }) {
  return (
    <>
      {type === "link" ? (
        <Link
          className={`${styles.btn} ${isFill ? styles.fill : ""}`}
          href={href}
        >
          {text}
        </Link>
      ) : (
        <button
          type={type}
          className={`${styles.btn} ${isFill ? styles.fill : ""}`}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default ButtonCustom
