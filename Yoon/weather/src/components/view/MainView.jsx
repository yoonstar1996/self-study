import React, { useEffect } from "react";
import styles from "./MainView.module.scss";
import Image from "next/image";
import Nav from "../nav/Nav";
import axios from "axios";

export default function MainView() {
  const TemporaryData = [
    {
      title: "습도",
      value: "88%",
    },
    {
      title: "풍속",
      value: "10m/s",
    },
    {
      title: "풍향",
      value: "WS",
    },
  ];

  // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

  // useEffect(() => {
  //   let initialLat = 37.5683;
  //   let initialLon = 126.9778;
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/onecall?lat=${initialLat}&lon=${initialLon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className={styles.leftContainer}>
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
          <div className={styles.weatherDegree}>
            <p>10&deg;</p>
          </div>
          <div className={styles.weatherIcon}>
            <Image
              width={168}
              height={160}
              src="/images/10d.png"
              alt="MianLogo"
              priority
            />
          </div>
          <div className={styles.weatherData}>
            {TemporaryData.map((temporary, index) => (
              <div key={index} className={styles.detailData}>
                <p>{temporary.title}</p>
                <p>{temporary.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id={styles.todayWeather}>
        <div className={styles.textBox}>
          <p>시간대별 날씨 정보</p>
          <p>이번주 날씨 보기</p>
        </div>
        <div className={styles.timelyWeatherBox}>
          <div className={styles.timelyWeather}>
            <div className={styles.icon}>
              <Image
                width={56.69}
                height={56.17}
                src="/images/09d.png"
                alt="29"
              />
            </div>
            <div className={styles.data}>
              <p className={styles.time}>2pm</p>
              <p className={styles.currentDegree}>32&deg;</p>
              <div>
                <Image
                  width={12.82}
                  height={12.82}
                  src="/images/drop.png"
                  alt="drop"
                />
                <p className={styles.fall}>15%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
