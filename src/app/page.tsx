import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import AppPhoto from "../../public/images/appareil_photo.jpg";
import Micro from "../../public/images/microphone.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.home__container}>
        <div className={styles.img__container}>
          <h2 className={styles.title__photos}>Photos</h2>
          <Link href="/photos">
            <Image
              className={styles.img}
              src={AppPhoto}
              alt="Image d'un appareil photo"
            ></Image>
          </Link>
        </div>
        <div className={styles.img__container}>
          <h2 className={styles.title__musics}>Musics</h2>
          <Link href="/musics">
            <Image
              className={styles.img}
              src={Micro}
              alt="Image d'un micro"
            ></Image>
          </Link>
        </div>
      </main>
    </>
  );
}
