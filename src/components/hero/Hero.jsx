import Image from "next/image";
import ButtonCustom from "../lib/button/ButtonCustom";
import styles from "./hero.module.scss";
import { amiri } from "@/src/utils/fonts";
import { palanquin } from "@/src/utils/fonts";

function Hero() {
  return (
    <section className={`${styles.hero} ${amiri.className}`}>
      <div className="container">
        <div>
          <h1>Give Your Nails Sweet Treat</h1>
          <div className={`${palanquin.className} ${styles.description}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className={styles.btn}>
            <ButtonCustom text={"Book Appointement"}></ButtonCustom>
            <ButtonCustom text={"Our Service"}></ButtonCustom>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={"/coat-nail.jpg"} width={435} height={650} alt="" />
          <Image src={"/peddicure.jpg"} width={400} height={265} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
