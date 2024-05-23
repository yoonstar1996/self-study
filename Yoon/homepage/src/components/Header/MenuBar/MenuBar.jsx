import React from "react";
import styles from "./MenuBar.module.scss";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function MenuBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>{/* css로 이미지가 들어가는 자리 */}</div>
        <div className={styles.nav}>
          <ul className={styles.list}>
            <li>{`브랜드`}</li>
            <li>{`도시락`}</li>
            <li>{`푸드트럭`}</li>
            <li>{`케이터링`}</li>
            <li>{`셰프이야기`}</li>
          </ul>
        </div>
        <div className={styles.orderList}>
          <div>{`주문내역`}</div>
          {/* 아이콘 */}
          <IoMdCheckboxOutline />
        </div>
      </div>
    </div>
  );
}
