import styles from "../../../public/style/follow.module.css";
import Image from "next/image";
import LinkedIn from "../../../public/data/images/linkedin-50.png";
import Skype from "../../../public/data/images/skype-50.png";
import Email from "../../../public/data/images/email-50.png";
import Link from "next/link";

export default function Follow() {
  return (
    <>
      <div className={styles.follow__container}>
        <div className={styles.under__container}>
          <Link
            className={styles.linkedin}
            href="https://www.linkedin.com/in/louisjolles/"
            target="blank"
          >
            <Image
              className={styles.icon}
              src={LinkedIn}
              alt="Icône de Linkedin"
            ></Image>
            <p className={styles.link}>
              https://www.linkedin.com/in/louisjolles/
            </p>
          </Link>
          <a className={styles.skype} href="skype:live:louisjolles?call">
            <Image
              className={styles.icon}
              src={Skype}
              alt="Icône de Skype"
            ></Image>
            <p className={styles.link}>louisjolles</p>
          </a>
          <a
            className={styles.email}
            href="mailto:louis.jolles@hotmail.fr?subject=HTML link"
          >
            <Image
              className={styles.icon}
              src={Email}
              alt="Icône de Email"
            ></Image>
            <p className={styles.link}>louis.jolles@hotmail.fr</p>
          </a>
        </div>
      </div>
    </>
  );
}
