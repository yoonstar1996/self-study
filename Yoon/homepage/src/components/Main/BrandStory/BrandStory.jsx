import React from "react";
import styles from "./BrandStory.module.scss";

export default function BrandStory() {
  return (
    <div className={styles.background}>
      <div className={styles.inner}>
        <div className={styles.titleBox}>
          <div className={styles.mainTitle}>BRAND STORY</div>
          <div className={styles.subTitle}>
            모두가 상생할 수 있는 방향을 제시하다
          </div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <div className={styles.image1}></div>
            <div className={styles.title}>CHEF HOUSE</div>
            <div className={styles.desc}>
              한식레시피를 중심으로 정통한식과 현대적감각의 퓨전한식으로
              발전시킨 단체 도시락 전문 브랜드, 셰프하우스
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.image2}></div>
            <div className={styles.title}>INGREDIENTS</div>
            <div className={styles.desc}>
              모든 식재료는 고객분들이 안심하고 드실 수 있도록 엄격한 기준 아래
              선별됩니다.
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.image3}></div>
            <div className={styles.title}>CSR</div>
            <div className={styles.desc}>
              셰프하우스는 식지 않는 뜨거운 진심으로 따뜻한 오늘, 따뜻한 세상을
              만듭니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
