"use client";

import Image from "next/image";
import styles from "../../../public/style/photos.module.css";
import database from "../../db.json";

export default function Photos() {
  return (
    <div className={styles.photos_container}>
      {database.photos.map((photo) => (
        <Image
          id={`photo${photo.id}`}
          className={styles.item}
          key={photo.id}
          src={photo.src}
          alt="photos"
          width={500}
          height={500}
          loading="lazy"
        ></Image>
      ))}
    </div>
  );
}
