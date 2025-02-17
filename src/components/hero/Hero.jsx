import Image from "next/image"
import ButtonCustom from "../lib/button/ButtonCustom"
import styles from "./hero.module.scss"
import { amiri } from "@/src/utils/fonts"
import { palanquin } from "@/src/utils/fonts"
import absoluteUrl from "@/src/utils/absoluteURL"

function Hero({ data }) {
  return (
    <section className={`${styles.hero} ${amiri.className}`}>
      <div className="container">
        <div>
          <h1>{data.content.title}</h1>
          <div className={`${palanquin.className} ${styles.description}`}>
            <p>{data.content.description}</p>
          </div>
          <div className={styles.btn}>
            {data.content.button.map((item, index) => (
              <ButtonCustom
                text={item.Title}
                key={index}
                type="link"
                href={item.url}
                isFill={item.isFill}
              ></ButtonCustom>
            ))}
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src={absoluteUrl(
              data.images.images_connection.nodes[0].formats.large.url
            )}
            width={435}
            height={650}
            alt=""
          />
          <Image
            src={absoluteUrl(
              data.images.images_connection.nodes[1].formats.large.url
            )}
            width={400}
            height={265}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
