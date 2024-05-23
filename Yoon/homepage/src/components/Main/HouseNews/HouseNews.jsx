import React from "react";
import styles from "./HouseNews.module.scss";

export default function HouseNews() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.titleBox}>
          <div className={styles.mainTitle}>{`HOUSE NEWS`}</div>
          <div className={styles.subTitle}>{`셰프하우스의 새소식입니다.`}</div>
        </div>
        <div className={styles.contentBox}>
          <div className={styles.image}>{/* css로 이미지 들어가는 자리 */}</div>
          <div className={styles.content}>
            <div className={styles.noticeBox}>
              <div className={styles.noticeTitleBox}>
                <div className={styles.noticeTitle}>{`공지사항`}</div>
                <div className={styles.plusIcon}>
                  {/* css로 이미지 들어가는 자리 */}
                </div>
              </div>
              <div className={styles.notice}>
                <div className={styles.noticeContent}>
                  {`홈페이지를 새로 오픈했습니다.`}
                </div>
                <div className={styles.date}>{`2019-07-30`}</div>
              </div>
            </div>
            <div className={styles.customerServiceBox}>
              <div className={styles.customerServiceTitleBox}>
                <div className={styles.customerServiceTitle}>{`고객센터`}</div>
                <div className={styles.plusIcon}>
                  {/* css로 이미지 들어가는 자리 */}
                </div>
              </div>
              <div className={styles.customerServiceNumber}>{`1599-8783`}</div>
              <div className={styles.time}>{`이용시간 평일 09:00~18:00`}</div>
              <div className={styles.exception}>
                {`단, 매월 둘째주 수요일 09:00~17:30`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
