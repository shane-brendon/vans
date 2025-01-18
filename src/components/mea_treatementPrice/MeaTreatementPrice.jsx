import React from "react";
import styles from "./mwaTreamentPrice.module.scss";
import Image from "next/image";
import BtnIcons from "../lib/btnAndIcons/BtnIcons";
import BookingForm from "../form/bookingForm/BookingForm";
import ContactForm from "../form/contactForm/contactForm";
function MeaTreatementPrice({
  type,
  caption,
  title,
  description = "",
  button = false,
}) {
  return (
    <section className={`${styles.wrapper} ${styles[`${type}`]}`}>
      <div className="container flex">
        <div className={styles.priceWrapper}>
          {caption && <div className={`${styles.tag} tags`}>{caption}</div>}
          {title && <h2 className="block_title">{title}</h2>}
          {description && (
            <div className="description">
              <p>{description}</p>
              {button && <BtnIcons />}
            </div>
          )}
          {type === "priceList" && <Listing />}
        </div>
        <div className={styles.imgWrapper}>
          {type !== "contact" && type !== "booking" ? (
            <Image src={"/person-nail.jpg"} width={550} height={800} alt="" />
          ) : type === "booking" ? (
            <BookingForm />
          ) : (
            <ContactForm />
          )}
        </div>
      </div>
    </section>
  );
}

function Listing() {
  return (
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
    </ul>
  );
}
export default MeaTreatementPrice;
