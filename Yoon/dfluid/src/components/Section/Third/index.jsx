import React, { useState } from "react";
import styles from "./index.module.css";
import { data } from "../../../data/data";
import { MdClose } from "react-icons/md";

const continents = ["All", "Asia", "Europe", "America", "Oceania"];
const years = [1000, 1300, 1700, 2000];

export default function ThirdSection() {
  // 대륙 필터 관련 상태
  const [selectedContinent, setSelectedContinent] = useState("All");

  // 연도 필터 관련 상태
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);

  // 모달 관련 상태
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedDesc, setSelectedDesc] = useState("");

  // 대륙 선택 함수
  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  // 연도 선택 함수
  const handleYearClick = (year) => {
    if (startYear === year && endYear === null) {
      setStartYear(null);
      setEndYear(null);
    } else if (startYear === null || (startYear !== null && endYear !== null)) {
      setStartYear(year);
      setEndYear(null);
    } else if (startYear !== null && endYear === null) {
      if (year < startYear) {
        setEndYear(startYear);
        setStartYear(year);
      } else {
        setEndYear(year);
      }
    }
  };

  // 데이터 클릭 시 모달 창에 데이터 전달 함수
  const handleDataClick = (city, year, img, desc) => {
    setShowModal(true);
    setSelectedCity(city);
    setSelectedYear(year);
    setSelectedImg(img);
    setSelectedDesc(desc);
  };

  // 대륙, 연도별 필터링 되는 데이터
  const filteredData = data
    .filter(
      (item) =>
        selectedContinent === "All" || item.continent === selectedContinent
    )
    .filter((item) => {
      if (startYear !== null && endYear !== null) {
        return item.year >= startYear && item.year <= endYear;
      }
      return true;
    });

  return (
    <section className={styles.container}>
      <div className={styles.title}>Duis tincidunt ut ligula vitae mollis.</div>

      <div className={styles.filterContainer}>
        {/* 대륙 필터 부분 */}
        <div className={styles.continentFilter}>
          {continents.map((continent) => (
            <div
              key={continent}
              className={`${styles.option} ${
                selectedContinent === continent ? styles.selected : ""
              }`}
              onClick={() => handleContinentClick(continent)}
            >
              {continent}
            </div>
          ))}
        </div>
        {/* 연도 필터 부분 */}
        <div className={styles.yearFilter}>
          {years.map((year, index) => (
            <div key={year} className={styles.yearItem}>
              <div
                className={`${styles.option} ${
                  startYear === year ||
                  endYear === year ||
                  (startYear < year && year < endYear)
                    ? styles.selected
                    : ""
                }`}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </div>
              {index < years.length - 1 && (
                <div
                  className={`${styles.bar} ${
                    startYear <= year && endYear >= years[index + 1]
                      ? styles.selectedBar
                      : ""
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 데이터 보여지는 부분 */}
      <div className={styles.dataGroup}>
        {filteredData.length > 0 ? (
          filteredData.map(({ city, year, img, desc }, index) => (
            <div
              key={index}
              className={styles.group}
              onClick={() => handleDataClick(city, year, img, desc)}
            >
              <div className={styles.top}>
                <div className={styles.city}>{city}</div>
                <div className={styles.year}>{year}</div>
              </div>
              <img src={img} alt={city} />
              <p className={styles.desc}>{desc}</p>
            </div>
          ))
        ) : (
          <p className={styles.noData}>해당 조건에 맞는 데이터가 없습니다.</p>
        )}
      </div>
      {/* 모달 부분 */}
      {showModal && (
        <div className={styles.modalContainer}>
          <div
            className={styles.modalOverlay}
            onClick={() => setShowModal(false)}
          />
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setShowModal(false)}
            >
              <MdClose size={24} />
            </button>
            <div className={styles.top}>
              <div className={styles.city}>{selectedCity}</div>
              <div className={styles.year}>{selectedYear}</div>
            </div>
            <img src={selectedImg} alt={selectedCity} />
            <p className={styles.desc}>{selectedDesc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
