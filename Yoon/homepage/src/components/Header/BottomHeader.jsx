import React from "react";
import styles from "./BottomHeader.module.scss";
import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function BottomHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}></div>
        <div className={styles.nav}>
          <ul className={styles.list}>
            <li>브랜드</li>
            <li>도시락</li>
            <li>푸드트럭</li>
            <li>케이터링</li>
            <li>셰프이야기</li>
          </ul>
        </div>
        <div className={styles.orderList}>
          <div>주문내역</div>
          <IoMdCheckboxOutline />
        </div>
      </div>
    </div>
  );
}
