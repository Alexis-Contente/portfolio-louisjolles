import styles from "../../../public/style/follow.module.css";
import Image from "next/image";
import LinkedIn from "../../../public/data/images/linkedin-50.png";
import Skype from "../../../public/data/images/skype-50.png";
import Email from "../../../public/data/images/email-50.png";

export default function Follow() {
  return (
    <>
      <div className={styles.follow__container}>
        <div className={styles.linkedin}>
          <Image src={LinkedIn} alt="Icône de Linkedin"></Image>
          <p className={styles.link}>
            https://www.linkedin.com/in/louisjolles/
          </p>
        </div>
        <div className={styles.skype}>
          <Image src={Skype} alt="Icône de Skype"></Image>
          <p className={styles.link}>louisjolles</p>
        </div>
        <div className={styles.email}>
          <Image src={Email} alt="Icône de Email"></Image>
          <p className={styles.link}>louis.jolles@hotmail.fr</p>
        </div>
      </div>
    </>
  );
}
