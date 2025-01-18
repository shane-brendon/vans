import Image from "next/image";
import styles from "./footer.module.scss";
import FacebookIcon from "@/src/assets/FacebookIcon";
import InstagramIcon from "@/src/assets/InstagramIcon";
import TwitterIcon from "@/src/assets/TwitterIcon";
import PinterestIcon from "@/src/assets/PinterestIcon";
import { palanquin } from "@/src/utils/fonts";
import { amiri } from "@/src/utils/fonts";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className="container">
        <div className={styles.top}>
          <div className="info">
            <div className={styles.logo}>
              <Image
                src={"/logo-naylish-light.png"}
                width={155}
                height={65}
                alt=""
              />
            </div>
            <div className={`${palanquin.className} ${styles.description}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className={`socials ${styles.socials}`}>
              <FacebookIcon width={16} height={16} fill={"#fff"} />
              <InstagramIcon width={16} height={16} fill={"#fff"} />
              <TwitterIcon width={16} height={16} fill={"#fff"} />
              <PinterestIcon width={16} height={16} fill={"#fff"} />
            </div>
          </div>
          <div className="support">
            <h4 className={`${amiri.className}`}>Support</h4>
            <ul className={palanquin.className}>
              <li>FAQ&apos;s</li>
              <li>Privacy Policy</li>
              <li>Term & Conditions</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className={`${amiri.className}`}>Contact</h4>
            <ul className={palanquin.className}>
              <li>Jl. Pantai Batu Mejan, Canggu, Bali</li>
              <li>naylish@domain.com</li>
              <li>Phone : (+62)81 234 567</li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <div>
              <h4 className={`${amiri.className}`}>Subscribe Newsletter</h4>
              <form action="">
                <input type="email" placeholder="Your E-mail" />
                <button type="submit" className={palanquin.className}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div>
          <div className="author">Nail Salon Template Kit By Jegtheme.</div>
          <div className="copyrights">
            Copyright © 2022. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
