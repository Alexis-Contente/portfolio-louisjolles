import React from "react";
import styles from "../app/page.module.css";

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
