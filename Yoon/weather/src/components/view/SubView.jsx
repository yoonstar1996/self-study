import Image from "next/image";
import React from "react";
import Nav from "../nav/Nav";
import Map from "../map/Map";
import styles from "./SubView.module.scss";

export default function SubView() {
  return (
    <div className={styles.rightContainer}>
      <div id={styles.cityNameBox}>
        <div className={styles.cityName}>
          <p>San Fransisco</p>
          <p>Jan 28</p>
        </div>
      </div>
      <div id={styles.contentsBox}>
        <div className={styles.buttonBox}>
          <div className={styles.buttonBackground}>
            <button className={styles.forecast}>forecast</button>
            <button className={styles.airquality}>airquality</button>
          </div>
        </div>
        <div className={styles.weatherBox}>
          <div className={styles.airCondition}>
            <p>매우 추움</p>
          </div>
          <div className={styles.detail}>
            <div className={styles.title}>
              <p>Detail Temperatures</p>
            </div>
            <div className={styles.data}>
              <div className={styles.dataName}>
                <p></p>
                <p></p>
              </div>
              <div className={styles.dataValue}>
                <p>
                  <span></span>
                  &deg;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
      <Nav />
    </div>
  );
}
