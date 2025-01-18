import React from "react";
import styles from "./testimonials.module.scss";
import Image from "next/image";

function Testiamonials() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.text}>
          <div>
            <h5 className="tags">Testimonial</h5>
          </div>
          <h2 className="block_title">What Our Costumer Say</h2>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className={styles.testimonials}>
          <Image
            src={"/getting-nails-done.jpg"}
            width={530}
            height={563}
            alt=""
          />
          <div className={styles.caroussel}>
            <div className={styles.item}>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </div>
              <div className={styles.star}>*****</div>
              <div className={styles.author}>
                <Image src={"/portrait.jpg"} width={60} height={60} alt="" />
                <div>
                  <div className="name">Joana Dune</div>
                  <div className="job_title">Designation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testiamonials;
