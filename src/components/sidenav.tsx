import styles from "../app/page.module.css";

export default function Sidenav() {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.list__item}>
        <a href="">Music</a>
      </li>
      <li className={styles.list__item}>
        <a href="">Photos</a>
      </li>
      <li className={styles.list__item}>
        <a href="">About</a>
      </li>
      <li className={styles.list__item}>
        <a href="">Follow</a>
      </li>
    </ul>
  );
}
