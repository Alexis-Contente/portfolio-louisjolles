import React from "react";
import Link from "next/link";
import Image from "next/image";
import Musics from "../data/images/microphone.jpg";
import Photos from "../data/images/appareilphoto.jpg";
import styles from "../app/page.module.css";

export default function Home() {
  return (
    <div className={styles.portfolio__page}>
      <div className={styles.portfolio__container}>
        <Link className={styles.musics__container} href={"/musics"}>
          <div className={styles.categorie_container}>
            <p className={styles.categorie}>Music</p>
            <Image
              className={styles.image}
              src={Musics}
              alt="Image d'un microphone"
              width={400}
              height={600}
            ></Image>
          </div>
        </Link>
        <Link className={styles.photos__container} href={"/photos"}>
          <div className={styles.categorie_container}>
            <p className={styles.categorie}>Photo</p>
            <Image
              className={styles.image}
              src={Photos}
              alt="Image de deux appareils photos"
              width={400}
              height={600}
            ></Image>
          </div>
        </Link>
      </div>
    </div>
  );
}
