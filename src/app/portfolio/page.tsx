import styles from "../../../public/style/portfolio.module.css";
import Image from "next/image";
import Musics from "../../../public/data/images/microphone.jpg";
import Photos from "../../../public/data/images/appareil_photo.jpg";

export default function Portfolio() {
  return (
    <>
      <div className={styles.portfolio__container}>
        <div className={styles.musics__container}>
          <p className={styles.categorie}>Musics</p>
          <Image
            className={styles.image}
            src={Musics}
            alt="Image d'un microphone"
          ></Image>
        </div>
        <div className={styles.photos__container}>
          <p className={styles.categorie}>Photos</p>
          <Image
            className={styles.image}
            src={Photos}
            alt="Image de deux appareils photos"
          ></Image>
        </div>
      </div>
    </>
  );
}
