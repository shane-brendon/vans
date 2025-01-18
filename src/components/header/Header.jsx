"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import FacebookIcon from "@/src/assets/FacebookIcon";
import InstagramIcon from "@/src/assets/InstagramIcon";
import HamburgerMenuIcon from "@/src/assets/HamburgerMenuIcon";
import useScreen from "../../hooks/useScreen";
import Nav from "../lib/nav/Nav";
import { useState } from "react";
function Header() {
  const [menu, setMenu] = useState(false); // Define state for the menu
  const screen = useScreen(); // Use screen dimensions

  const handleHamburgerMenuClick = () => {
    setMenu((menu) => !menu); // Update the menu state on click
  };

  return (
    <header className={styles.wrapper}>
      <div className={`container ${styles.header}`}>
        <div className="logo">
          <Image
            src={"/logo-naylish-dark.png"}
            width={170}
            height={70}
            alt="this"
          ></Image>
        </div>
        <div className={styles.right}>
          {screen.width > 840 && (
            <>
              <Nav />
              {menu && (
                <div className={styles.quickInfoWrapper}>
                  <div className={styles.quickInfoContainer}>
                    <div>
                      <div className={styles.top}>
                        <div>
                          <span
                            className={styles.closeQuickInfo}
                            onClick={handleHamburgerMenuClick}
                          >
                            X
                          </span>
                          <Image
                            src={"/logo-naylish-dark.png"}
                            width={250}
                            height={120}
                            alt="this"
                          ></Image>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam vel risus imperdiet, gravida justo eu.
                        </p>
                      </div>
                      <ul className={styles.middle}>
                        <li>Jl. Pantai Batu Mejan, Canggu, Bali</li>
                        <li>(+62)81 234 567</li>
                        <li>naylish@domain.com</li>
                      </ul>
                      <div className={styles.bottom}>
                        <div className="caption">Opening</div>
                        <ul>
                          <li>
                            <span>Monday - Friday :</span>
                            <span>09:00 AM - 19:00 PM</span>
                          </li>
                          <li>
                            <span>Saturday :</span>
                            <span>09:00 AM - 19:00 PM</span>
                          </li>
                          <li>
                            <span>Sunday :</span>
                            <span>09:00 AM - 19:00 PM</span>
                          </li>
                        </ul>
                      </div>
                      <div className={styles.bottomSocials}>
                        <FacebookIcon
                          width={16}
                          height={16}
                          fill={"#053543"}
                        ></FacebookIcon>
                        <FacebookIcon
                          width={16}
                          height={16}
                          fill={"#053543"}
                        ></FacebookIcon>
                        <FacebookIcon
                          width={16}
                          height={16}
                          fill={"#053543"}
                        ></FacebookIcon>
                        <FacebookIcon
                          width={16}
                          height={16}
                          fill={"#053543"}
                        ></FacebookIcon>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          <div className={styles.socials}>
            <FacebookIcon
              width={20}
              height={20}
              fill={"#053543"}
            ></FacebookIcon>
            <InstagramIcon
              width={20}
              height={20}
              fill={"#053543"}
            ></InstagramIcon>
            <HamburgerMenuIcon
              width={24}
              height={24}
              fill={"#053543"}
              onClick={handleHamburgerMenuClick} // Call the handler on click
            />
          </div>
        </div>
      </div>

      {screen.width < 840 && menu && (
        <div className={styles.menuMobileWrapper}>
          <div className={styles.image}>
            <Image
              src={"/logo-naylish-dark.png"}
              width={170}
              height={70}
              alt="this"
            ></Image>
            <span onClick={handleHamburgerMenuClick}>X</span>
          </div>
          <Nav />
        </div>
      )}
    </header>
  );
}

export default Header;
