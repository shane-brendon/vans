import React from "react";
import styles from "./btnIcons.module.scss";
import ApprovedIcon from "@/src/assets/ApprovedIcon";
import HappyClientsIcon from "@/src/assets/HappyClientsIcon";
import ButtonCustom from "../button/ButtonCustom";

function BtnIcons() {
  return (
    <div className={styles.btn}>
      <div className={styles.styleWrapper}>
        <div className="experience">
          <div className={styles.logo}>
            <ApprovedIcon width={60} height={60} fill={"#c6651a"} />
          </div>
          <div className={styles.stats}>24</div>
          <div className="description">Year Experience</div>
        </div>
        <div className="client">
          <div className={styles.logo}>
            <HappyClientsIcon width={60} height={60} fill={"#c6651a"} />
          </div>
          <div className={styles.stats}>24</div>
          <div className="description">Year Experience</div>
        </div>
      </div>
      <ButtonCustom text={"About Us"} isFill></ButtonCustom>
    </div>
  );
}

export default BtnIcons;
