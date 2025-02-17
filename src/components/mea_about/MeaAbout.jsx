import Image from "next/image"
import styles from "./meaAbout.module.scss"
import BtnIcons from "../lib/btnAndIcons/BtnIcons"

function MeaAbout({ data }) {
  const content = data.content
  return (
    <section className={styles.wrapper}>
      <div className="container flex">
        <div className={styles.imgWrapper}>
          <Image
            src={"/woman-having-a-manicure.jpg"}
            width={335}
            className={styles.img0}
            height={500}
            alt=""
          ></Image>
          <Image
            src={"/manicure-accessories.jpg"}
            width={185}
            height={280}
            className={styles.img1}
            alt=""
          ></Image>
          <Image
            src={"/woman-using-a-buffer-to-file-nail.jpg"}
            width={255}
            height={170}
            className={styles.img2}
            alt=""
          ></Image>
        </div>
        <div>
          <span className="tags">{content.caption}</span>
          <h2 className="block_title">{content.title}</h2>
          <div className="description">
            <p>{content.description}</p>
          </div>
          <BtnIcons btn={content.button} icon={content.icon}/>
        </div>
      </div>
    </section>
  )
}

export default MeaAbout
