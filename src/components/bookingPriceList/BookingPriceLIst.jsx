import React from "react";
import styles from "./bookingPriceList.module.scss";

function BookingPriceList() {
  return (
    <section className={`${styles.wrapper}`}>
      <div className="container">
        <div>
          <span className="tags">Service Menu</span>
          <h2 className="block_title">Give Your Nail A sweet Treat</h2>
        </div>
        <ul>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <div className={styles.name}>Manicure</div>
              <div className={styles.separator}></div>
              <div className="item__price">
                <span className="currency">$</span>
                12.00
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BookingPriceList;
