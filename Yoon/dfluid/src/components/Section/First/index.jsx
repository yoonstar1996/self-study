import React from "react";
import styles from "./index.module.css";

const sections = [
  {
    imgSrc: "/images/section1/firstImage.png",
    title: "Sed ut perspiciatis",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    imgSrc: "/images/section1/secondImage.png",
    title: "Lorem ipsum dolor",
    description:
      "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    imgSrc: "/images/section1/thirdImage.png",
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
    <section className={styles.container}>
      {shuffledSections.map((section, index) => (
        <div key={index} className={styles.group}>
          <img src={section.imgSrc} alt={section.imgSrc} />
          <h4 className={styles.title}>{section.title}</h4>
          <p className={styles.desc}>{section.description}</p>
          <div className={styles.button}>LEARN MORE</div>
        </div>
      ))}
    </section>
  );
}
