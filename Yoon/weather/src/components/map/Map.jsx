import React, { useEffect } from "react";
import styles from "./Map.module.scss";
import MapPositions from "./map-position.json";

export default function Map() {
  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    kakaoMapScript.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById(styles.map);
        const options = {
          center: new window.kakao.maps.LatLng(37.5683, 126.9778),
          level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);

        const positions = MapPositions.map((pos) => ({
          latlng: new kakao.maps.LatLng(...pos.latlng),
          cityName: pos.cityName,
        }));
        positions.forEach((pos) => {
          const marker = new kakao.maps.Marker({
            position: pos.latlng,
          });
          marker.setMap(map);
        });
      });
    };

    return () => {
      document.head.removeChild(kakaoMapScript);
    };
  }, []);

  return (
    <div id={styles.mapContainer}>
      <div id={styles.map}></div>
    </div>
  );
}
