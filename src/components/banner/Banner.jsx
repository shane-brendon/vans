import React from "react";
import styles from "./banner.module.scss";
import { amiri, palanquin } from "@/src/utils/fonts";

function Banner() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h1 className={amiri.className}>About Us</h1>
        <div className={`${styles.description} ${palanquin.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
      </div>
    </section>
  );
}

export default Banner;
