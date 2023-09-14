"use client";
import styles from "../../../public/style/photos.module.css";
import Image from "next/image";
import Close from "../../../public/assets/icons8-close-window-48.png";
import Next from "../../../public/assets/icons8-arrow-next-50.png";
import Prev from "../../../public/assets/icons8-arrow-prev-50.png";
import database from "../../db.json";
import { useState } from "react";

const images = database.photos;

export default function Photos() {
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (id) => {
    setSelectedImageId(id);
    setShowModal(true);
  };

  const handlePrevClick = () => {
    const currentIndex = images.findIndex(
      (image) => image.id === selectedImageId
    );
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImageId(images[newIndex].id);
  };

  const handleNextClick = () => {
    const currentIndex = images.findIndex(
      (image) => image.id === selectedImageId
    );
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImageId(images[newIndex].id);
  };

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
              onClick={() => handleClick(image.id)}
            />
          ))}
        </div>
      </div>

      {showModal && selectedImageId !== null && (
        <div className={styles.modal__container}>
          <div className={styles.modal}>
            <Image
              className={styles.modal__prev}
              alt="Previous arrow"
              width={30}
              height={30}
              src={Prev}
              onClick={handlePrevClick}
            />
            <Image
              className={styles.modal__image}
              src={images.find((image) => image.id === selectedImageId).src}
              alt="Photos"
              width={500}
              height={500}
              loading="lazy"
            />
            <Image
              className={styles.modal__next}
              alt="Next arrow"
              width={30}
              height={30}
              src={Next}
              onClick={handleNextClick}
            />
            <Image
              src={Close}
              alt="Close"
              width={30}
              height={30}
              loading="lazy"
              className={styles.modal__close}
              onClick={() => setShowModal(!showModal)}
            />
          </div>
        </div>
      )}
    </>
  );
}
