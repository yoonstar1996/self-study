import React from "react";
import styles from "./RealReview.module.scss";

export default function RealReview() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.review}>
          <div className={styles.textBox}>
            리얼후기 <br />
            <strong>#셰프이야기</strong>
          </div>
          <div className={styles.arrowBox}>
            <div className={styles.leftArrow}></div>
            <div className={styles.rightArrow}></div>
          </div>
        </div>
        <div className={styles.slideBox}>
          <div className={styles.image1}>
            <div className={styles.desc}>뮤지컬배우 서포트 도시락</div>
          </div>
          <div className={styles.image2}>
            <div className={styles.desc}>
              쇼챔피언 오션(5tion) 멤버 간식 도시락
            </div>
          </div>
          <div className={styles.image3}>
            <div className={styles.desc}>
              뮤지컬더스트레인저 김동준님 서포트 도시락
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}