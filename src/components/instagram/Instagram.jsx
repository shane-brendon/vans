import React from "react";
import styles from "./instagram.module.scss";
import Image from "next/image";
import InstagramIcon from "@/src/assets/InstagramIcon";

function Instagram() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <div className="tags">
          <p>Follow our instagram</p>
        </div>
        <div className={styles.username}>@naylish.insta</div>
      </div>
      <div className={styles.instagram}>
        <div className={styles.item}>
          <Image src={"/instagram1.jpg"} width={305} height={305} alt="" />
          <div className={styles.logoContainer}>
            <InstagramIcon width={24} height={24} fill={"#fff"} />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={"/instagram1.jpg"} width={305} height={305} alt="" />
          <div className={styles.logoContainer}>
            <InstagramIcon width={24} height={24} fill={"#fff"} />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={"/instagram1.jpg"} width={305} height={305} alt="" />
          <div className={styles.logoContainer}>
            <InstagramIcon width={24} height={24} fill={"#fff"} />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={"/instagram1.jpg"} width={305} height={305} alt="" />
          <div className={styles.logoContainer}>
            <InstagramIcon width={24} height={24} fill={"#fff"} />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={"/instagram1.jpg"} width={305} height={305} alt="" />
          <div className={styles.logoContainer}>
            <InstagramIcon width={24} height={24} fill={"#fff"} />
          </div>
        </div>
        <div className={styles.item}>
          <Image src={"/instagram1.jpg"} width={305} height={305} alt="" />
          <div className={styles.logoContainer}>
            <InstagramIcon width={24} height={24} fill={"#fff"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
