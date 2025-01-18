import Image from "next/image";
import React from "react";
import styles from "./services.module.scss";
import { amiri } from "@/src/utils/fonts";
function Services({ children }) {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.topWrapper}>
          <div>
            <div className="tags">Our Services</div>
            <h2 className="block_title">
              Make Gorgeous Nails A Part of Your Life
            </h2>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
              perferendis sunt sequi in natus porro quae excepturi temporibus
              deserunt doloremque. Suscipit ab non asperiores pariatur earum
              voluptatum obcaecati dolor.
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

export function Cards() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <Image src={"/manicure.jpg"} width={360} height={385} alt="" />
        <div className={styles.booking}>
          <div className={amiri.className}>Manicure</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit.
          </div>
          <button type="button">book now --- </button>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={"/manicure.jpg"} width={360} height={385} alt="" />
        <div className={styles.booking}>
          <div className={amiri.className}>Manicure</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit.
          </div>
          <button type="button">book now --- </button>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={"/manicure.jpg"} width={360} height={385} alt="" />
        <div className={styles.booking}>
          <div className={amiri.className}>Manicure</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit.
          </div>
          <button type="button">book now --- </button>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={"/manicure.jpg"} width={360} height={385} alt="" />
        <div className={styles.booking}>
          <div className={amiri.className}>Manicure</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectet adipiscing elit.
          </div>
          <button type="button">book now --- </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
