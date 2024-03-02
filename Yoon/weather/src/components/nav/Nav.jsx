import React from "react";
import styles from "./Nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearchLocation,
  faChartLine,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faSearchLocation} />
      <FontAwesomeIcon icon={faChartLine} />
      <FontAwesomeIcon icon={faCog} />
    </nav>
  );
}
