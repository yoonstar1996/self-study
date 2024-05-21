import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <TopHeader />
      <BottomHeader />
    </div>
  );
}
