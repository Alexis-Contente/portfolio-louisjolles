import styles from "../../public/style/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer__container}>
      <p className={styles.first__text}>
        Created by Alexis Contente | With NextJS
      </p>
      <p className={styles.second__text}>
        Follow me on{" "}
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
    </footer>
  );
}
