"use client";
import styles from "../../../public/style/photos.module.css";
import Image from "next/image";
import database from "../../db.json";

const images = database.photos;

export default function Photos() {
  return (
    <>
      <div className={styles.photo__container}>
        <div className={styles.photo}>
          {images.map((image) => (
            <Image
              className={styles.item}
              key={image.id}
              src={image.src}
              alt="Photos"
              width={image.width}
              height={image.height}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </>
  );
}
