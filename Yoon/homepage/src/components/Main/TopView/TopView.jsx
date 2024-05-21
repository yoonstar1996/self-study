import React from "react";
import styles from "./TopView.module.scss";

export default function TopView() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.number}>
        <ul>
          <li className={styles.active}>
            <button className={styles.button}>1</button>
          </li>
          <li className={styles.hidden}>
            <button className={styles.button}>2</button>
          </li>
          <li className={styles.hidden}>
            <button className={styles.button}>3</button>
          </li>
        </ul>
      </div>
      <div className={styles.textBox}>
        <div className={styles.companyName}>CHEF HOUSE</div>
        <div className={styles.descBox}>
          <div className={styles.title}>맞춤형 도시락</div>
          <div>
            <div className={styles.desc}>
              가격, 인원수, 연령층, 식사시간까지 고려된 맞춤형으로 제공됩니다.
            </div>
            <div className={styles.desc}>
              정기고객일 경우 다양한 메뉴를 로테이션하여 메뉴 선택의 번거로움이
              없습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
