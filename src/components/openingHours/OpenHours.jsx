import React from "react";
import styles from "./openHours.module.scss";
import ButtonCustom from "../lib/button/ButtonCustom";

function OpenHours() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.placeholder}></div>
        <div>
          <div className={styles.text}>
            <h5 className="tags">Working Hour</h5>
            <h2 className="block_title">Indulge Your Nails</h2>
            <ul>
              <li>
                <div className="day">Monday – Friday</div>
                <div className="time">09.00 AM – 19.00 PM</div>
              </li>
              <li>
                <div className="day">Saturday</div>
                <div className="time">09.00 AM – 19.00 PM</div>
              </li>
              <li>
                <div className="day">Sunday</div>
                <div className="time">09.00 AM – 19.00 PM</div>
              </li>
            </ul>
            <ButtonCustom text={"Book now"} isFill />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenHours;
