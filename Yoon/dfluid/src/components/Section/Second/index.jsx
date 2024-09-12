import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const API_URL =
  "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM";

export default function SecondSection() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState("");
  const [isError, setIsError] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleButtonClick = () => {
    const valid = validateEmail(email);
    setIsValid(valid ? styles.valid : styles.invalid);
    setIsError(valid ? false : true);
  };

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setBackgroundUrl(data[0].urls.full);
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <section className={styles.container}>
      <img className={styles.background} src={backgroundUrl} alt="Background" />
      <div className={styles.textGroup}>
        <h4 className={styles.title}>Sed ut perspiciatis unde omnis</h4>
        <p className={styles.desc}>
          {`There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised words which don't look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure
        there isn't anything embarrassing hidden in the middle of text. All
        the Lorem Ipsum generators on the Internet tend to repeat predefined
        chunks as necessary.`}
        </p>

        <div className={styles.line}></div>

        <p className={styles.small}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore.
        </p>
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.text}>Subscribe to our newsletter</div>
        <div className={`${styles.box} ${isValid}`}>
          <input
            className={styles.input}
            placeholder="Enter your email"
            type="text"
            value={email}
            onChange={handleInputChange}
          />
          <img
            src="/images/section2/paper-plane.png"
            alt="paper-plane"
            onClick={handleButtonClick}
          />
        </div>
        {isError && (
          <div className={styles.error}>Please enter a valid email!</div>
        )}
      </div>
    </section>
  );
}
