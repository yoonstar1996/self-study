import React from "react";
import LoginBar from "./LoginBar/LoginBar";
import MenuBar from "./MenuBar/MenuBar";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <nav className={styles.container}>
      <LoginBar />
      <MenuBar />
    </nav>
  );
}
