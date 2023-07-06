import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <div className={styles.footer__container}>
      <p className={styles.first__text}>
        Application created by Alexis Contente | With NextJS
      </p>
      <p className={styles.second__text}>
        Follow me on my{" "}
        <a
          className={styles.social__media}
          href="https://github.com/Alexis-Contente"
          target="blank"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          className={styles.social__media}
          href="https://www.linkedin.com/in/alexis-contente/"
          target="blank"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
