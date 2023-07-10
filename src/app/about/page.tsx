/* eslint-disable react/no-unescaped-entities */
import styles from "../../../public/style/about.module.css";
import Image from "next/image";
import Profil from "../../../public/data/images/profil.png";

export default function About() {
  return (
    <div className={styles.about__page}>
      <div className={styles.about__container}>
        <Image
          className={styles.profil}
          src={Profil}
          alt="Photo de profil de Louis Jollès"
        ></Image>
        <p className={styles.description}>
          Passionné de musique depuis mon plus jeune âge, je pratique la{" "}
          <span className={styles.bold}>guitare</span> depuis maintenant 17 ans.
          Après 6 ans de cours théoriques et pratiques au sein des STUDIOS 125
          (Saint-Maur-des-Fossés, 94), je me suis rapidement tourné vers une{" "}
          <span className={styles.bold}>pratique quotidienne</span> au sein de
          différents groupes étudiants et jams sessions au cours de ma
          scolarité. Ces années de pratique m'ont permis de développer un goût
          prononcé pour l'
          <span className={styles.bold}>improvisation musicale</span> et la{" "}
          <span className={styles.bold}>spontanéité</span> du jeu. Je pratique
          aussi les <span className={styles.bold}>percussions</span>, la{" "}
          <span className={styles.bold}>basse</span> ainsi que le{" "}
          <span className={styles.bold}>piano</span> de manière autodidacte.
          <br />
          Fasciné par le processus d'
          <span className={styles.bold}>enregistrement</span> de la musique, la
          découverte autonome de la <span className={styles.bold}>MAO</span> et
          des techniques de <span className={styles.bold}>production</span>{" "}
          couplées à mon amour des <span className={styles.bold}>mélodies</span>{" "}
          m'ont amené à réaliser de nombreux{" "}
          <span className={styles.bold}>enregistrements courts</span>, divers et
          variés.
          <br />
          J'entretiens à ce jour cette{" "}
          <span className={styles.bold}>passion créative</span> des{" "}
          <span className={styles.bold}>boucles mélodiques</span> et de l'
          <span className={styles.bold}>expérimentation</span>.
          <br />
          Plus récemment, je me suis pris de passion pour la{" "}
          <span className={styles.bold}>photographie</span> argentique.
          <br />
          Cette nouvelle activité me permet de reconnecter règulièrement mon
          environnement à mon imaginaire, de façon libre et indépendante.
        </p>
      </div>
    </div>
  );
}
