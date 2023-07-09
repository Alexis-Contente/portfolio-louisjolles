import Link from "next/link";
import styles from "../../public/style/header.module.css";

export default function Sidenav() {
  return (
    <ul className={styles.nav__list}>
      <li className={styles.list__item}>
        <a href="">Portfolio</a>
      </li>
      <li className={styles.list__item}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.list__item}>
        <Link href="/follow">Follow</Link>
      </li>
    </ul>
  );
}
