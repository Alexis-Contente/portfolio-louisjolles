"use client";

import React, { useEffect, useState } from "react";
import styles from "../app/page.module.css";
import Image from "next/image";
import BurgerMenu from "../../public/images/icons8-menu-rounded-50.png";
import Sidenav from "./sidenav";
import Link from "next/link";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.name} href="/">
          Louis Jollès
        </Link>
      </h1>
      <nav className={styles.nav}>
        <Image
          className={styles.burger__menu}
          src={BurgerMenu}
          alt="Icône d'un burger menu"
          onClick={toggleNav}
        ></Image>
        {(toggleMenu || screenWidth > 900) && <Sidenav />}
      </nav>
    </header>
  );
}
