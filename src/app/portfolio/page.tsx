import styles from "../../../public/style/portfolio.module.css";
import Image from "next/image";
import Musics from "../../data/images/microphone.jpg";
import Photos from "../../data/images/appareil_photo.jpg";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.portfolio__page}>
      <div className={styles.portfolio__container}>
        <Link className={styles.musics__container} href={"/musics"}>
          <p className={styles.categorie}>Musics</p>
          <Image
            className={styles.image}
            src={Musics}
            alt="Image d'un microphone"
          ></Image>
        </Link>
        <Link className={styles.photos__container} href={"/photos"}>
          <p className={styles.categorie}>Photos</p>
          <Image
            className={styles.image}
            src={Photos}
            alt="Image de deux appareils photos"
          ></Image>
        </Link>
      </div>
    </div>
  );
}
