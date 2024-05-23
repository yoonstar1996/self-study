import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.personalInformation}>개인정보처리방침</div>
        <div className={styles.customerService}>
          {`고객센터 1599-8783 (이용시간 평일 09:00~18:00 / 단, 매월 둘째주 수요일
          09:00~17:30)`}
        </div>
        <div className={styles.textBox}>
          <div className={styles.represent}>{`대표자 : 이종열`}</div>
          <div className={styles.address}>
            {`인천광역시 미추홀구 용현동 181-17 1층 셰프하우스`}
          </div>
        </div>
        <div className={styles.copyRight}>
          {`COPYRIGHT©CHEFHOUSE.ALL RIGHTS RESERVED.`}
        </div>
      </div>
    </footer>
  );
}
