import React from "react";
import styles from "./contactCard.module.scss";
import LocationMarkerIcon from "@/src/assets/LocationMarkerIcon";
import PhoneCallIcon from "@/src/assets/PhoneCallIcon";
import EmailIcon from "@/src/assets/EmailIcon";

function ContactCards() {
  return (
    <section className={styles.contactCards}>
      <ul className="container">
        <li>
          <LocationMarkerIcon width={52} height={50} fill={"#C6651A"} />
          <h2 className="title">Salon Location</h2>
          <span className="description">
            Jl. Pantai Batu Mejan, Canggu, Bali
          </span>
        </li>
        <li>
          <PhoneCallIcon width={52} height={50} fill={"#C6651A"} />
          <h2 className="title">Give Us A Call</h2>
          <span className="description">(+62)81 234 567</span>
        </li>
        <li>
          <EmailIcon
            width={52}
            height={50}
            fill={"#C6651A"}
            className={`${styles.emailIcon}`}
          />
          <h2 className="title">Send Us A Message</h2>
          <span className="description">naylish@domain.com</span>
        </li>
      </ul>
    </section>
  );
}

export default ContactCards;
