import React from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import AppPhoto from "../../public/images/appareil_photo.jpg";
import Micro from "../../public/images/microphone.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className={styles.home}>
        <div className={styles.home__container}>
          <h1 className={styles.title}>Bonjour</h1>
          <p className={styles.intro}>
            Je suis Louis Jollès, guitariste expérimenté et fan de photographie.
          </p>
          <p className={styles.intro}>Bienvenue dans mon monde.</p>
        </div>
      </main>
    </>
  );
}
