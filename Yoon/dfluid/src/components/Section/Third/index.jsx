import React, { useState } from "react";
import styles from "./index.module.css";
import { data } from "../../../data/data";

const continents = ["All", "Asia", "Europe", "America", "Oceania"];

export default function ThirdSection() {
  const [selectedContinent, setSelectedContinent] = useState("All");

  const handleFilterClick = (continent) => {
    setSelectedContinent(continent);
  };

  const filteredData =
    selectedContinent === "All"
      ? data
      : data.filter((item) => item.continent === selectedContinent);

  return (
    <section className={styles.container}>
      <div className={styles.title}>Duis tincidunt ut ligula vitae mollis.</div>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          {continents.map((continent) => (
            <div
              key={continent}
              className={`${styles.option} ${
                selectedContinent === continent ? styles.selected : ""
              }`}
              onClick={() => handleFilterClick(continent)}
            >
              {continent}
            </div>
          ))}
        </div>
        {/* <div className={styles.filter}>
          <div>1000</div>
          <div>1300</div>
          <div>1700</div>
          <div>2000</div>
        </div> */}
      </div>

      <div className={styles.dataGroup}>
        {filteredData.length > 0 ? (
          filteredData.map(({ city, year, img, desc }, index) => (
            <div key={index} className={styles.group}>
              <div className={styles.top}>
                <div className={styles.city}>{city}</div>
                <div className={styles.year}>{year}</div>
              </div>
              <img src={img} alt={city} />
              <p className={styles.desc}>{desc}</p>
            </div>
          ))
        ) : (
          <p>해당 조건에 맞는 데이터는 없습니다.</p>
        )}
      </div>
    </section>
  );
}
