"use client";

import { useState } from "react";
import styles from "../../../public/style/musics.module.css";
import database from "../../db.json";

export default function Musics() {
  const [loops, setLoops] = useState(false);
  const handleClickLoops = () => {
    setLoops(!loops);
  };

  const [productions, setProductions] = useState(false);
  const handleClickProductions = () => {
    setProductions(!productions);
  };

  const [speedCompositions, setSpeedCompositions] = useState(false);
  const handleClickSpeedCompositions = () => {
    setSpeedCompositions(!speedCompositions);
  };

  return (
    <div className={styles.musics__page}>
      <div className={styles.musics__container}>
        <button className={styles.type} onClick={handleClickLoops}>
          Loops
        </button>
        {loops && (
          <div className={styles.loops}>
            {database.loops.map((loop) => (
              <iframe
                key={loop.id}
                className={styles.sound}
                //   scrolling="no"
                //   frameborder="no"
                allow="autoplay"
                src={loop.src}
              ></iframe>
            ))}
          </div>
        )}

        <button className={styles.type} onClick={handleClickProductions}>
          Productions
        </button>
        {productions && (
          <div className={styles.productions}>
            {database.productions.map((production) => (
              <iframe
                key={production.id}
                className={styles.sound}
                //   scrolling="no"
                //   frameborder="no"
                allow="autoplay"
                src={production.src}
              ></iframe>
            ))}
          </div>
        )}

        <button className={styles.type} onClick={handleClickSpeedCompositions}>
          Speed compositions
        </button>
        {speedCompositions && (
          <div className={styles.speed__compositions}>
            {database["speed-compositions"].map((composition) => (
              <iframe
                key={composition.id}
                className={styles.sound}
                //   scrolling="no"
                //   frameborder="no"
                allow="autoplay"
                src={composition.src}
              ></iframe>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
