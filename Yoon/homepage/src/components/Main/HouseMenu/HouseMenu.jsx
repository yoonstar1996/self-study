import React from "react";
import styles from "./HouseMenu.module.scss";

export default function HouseMenu() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <div className={styles.mainTitle}>HOUSE MENU</div>
          <div className={styles.subTitle}>
            엄선된 재료로 선택한 프리미엄 도시락
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.imageBox}></div>
          <div className={styles.textBox}>
            <div className={styles.contentMainTitle}>
              간편한 식사, 건강한 한끼
            </div>
            <div className={styles.contentSubTitle}>일반 도시락</div>
            <div className={styles.contentDesc}>
              한식을 주재료로 하며 먹기 편하고 간편한 덮밥부터 정통 한식과
              퓨전일품요리로 잘 차려진 한상같은 수제도시락까지 다양한 도시락
              형태의 건강한 웰빙 도시락
            </div>
            <div className={styles.showDetail}>자세히 보기</div>
            <div className={styles.arrowBox}>
              <button className={styles.leftArrow}></button>
              <button className={styles.rightArrow}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
