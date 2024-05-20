import React from "react";
import styles from "./TopHeader.module.scss";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <li>로그인</li>
          <li>회원가입</li>
          <li>입점문의</li>
          <li>고객센터</li>
        </ul>
      </div>
    </div>
  );
}
