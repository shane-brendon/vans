import React from "react"
import styles from "./btnIcons.module.scss"
import ApprovedIcon from "@/src/assets/ApprovedIcon"
import HappyClientsIcon from "@/src/assets/HappyClientsIcon"
import ButtonCustom from "../button/ButtonCustom"

function BtnIcons({ btn, icon }) {
  return (
    <div className={styles.btn}>
      <div className={styles.styleWrapper}>
        {icon.map((item, index) => (
          <div key={index}>
            <div className={styles.logo}>
              <ApprovedIcon width={60} height={60} fill={"#c6651a"} />
            </div>
            <div className={styles.stats}>{item.counter}</div>
            <div className="description">{item.description}</div>
          </div>
        ))}
      </div>
      {btn.map((item, index) => (
        <ButtonCustom text={item.Title} isFill={item.isFill} key={index} />
      ))}
    </div>
  )
}

export default BtnIcons
