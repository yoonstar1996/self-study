import React from "react";
import styles from "./index.module.css";
import firstImage from "../../../images/section1/firstImage.png";
import secondImage from "../../../images/section1/secondImage.png";
import thirdImage from "../../../images/section1/thirdImage.png";

const sections = [
  {
    imgSrc: firstImage,
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    imgSrc: secondImage,
    title: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    imgSrc: thirdImage,
    title: "Nemo enim ipsam",
    description:
      "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },
];

export default function FirstSection() {
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const shuffledSections = shuffleArray([...sections]);

  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
        <div>Snap photos and share like</div>
        <div>never before</div>
      </header>
      <section className={styles.sectionContainer}>
        {shuffledSections.map((section, index) => (
          <div key={index} className={styles.group}>
            <div className={styles.infoGroup}>
              <img src={section.imgSrc} alt={section.imgSrc} />
              <h4 className={styles.title}>{section.title}</h4>
            </div>
            <p className={styles.desc}>{section.description}</p>
            <div className={styles.button}>LEARN MORE</div>
          </div>
        ))}
      </section>
    </div>
  );
}
