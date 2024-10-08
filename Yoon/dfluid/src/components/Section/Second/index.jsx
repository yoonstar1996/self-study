import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import buttonImage from "../../../images/section2/paper-plane.png";

// 나의 Access Key
const API_URL =
  "https://api.unsplash.com/photos/random?client_id=QZCj0_63EH2V1vxd72goblk34jPHcIP1y8ieeOKImoo";

// dfluid Access Key
// const API_URL =
//   "https://api.unsplash.com/photos/random?client_id=RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM";

export default function SecondSection() {
  // 이메일 유효성 관련 상태
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState("");

  // 에러 관련 상태
  const [isError, setIsError] = useState(false);

  const [backgroundUrl, setBackgroundUrl] = useState("");

  // 이메일 유효성 검사
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  // 종이 비행기 버튼 클릭 시
  const handleButtonClick = () => {
    if (email === "") {
      alert("값을 입력해주세요.");
      return;
    } else {
      alert(`${email} 메일 구독 완료`);
    }
  };

  // 엔터 클릭 시
  const handleEnterClick = (e) => {
    if (!isError && e.key === "Enter") {
      handleButtonClick();
    }
  };

  useEffect(() => {
    if (email === "") {
      setIsValid("");
      setIsError(false);
    } else {
      const valid = validateEmail(email);
      setIsValid(valid ? styles.valid : styles.invalid);
      setIsError(valid ? false : true);
    }
  }, [email]);

  // 임의의 사진 받아오기
  useEffect(() => {
    const savedImage = sessionStorage.getItem("backgroundImage");

    if (savedImage) {
      setBackgroundUrl(savedImage);
    } else {
      const fetchBackgroundImage = async () => {
        try {
          const response = await fetch(API_URL);
          const data = await response.json();
          const imageUrl = data.urls.regular;

          sessionStorage.setItem("backgroundImage", imageUrl);

          setBackgroundUrl(imageUrl);
        } catch (error) {
          console.error("Error fetching background image:", error);
        }
      };

      fetchBackgroundImage();
    }
  }, []);

  return (
    <section className={styles.container}>
      <img className={styles.background} src={backgroundUrl} alt="Background" />
      <div className={styles.overlay} />
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
        <div className={styles.boxContainer}>
          <div className={`${styles.box} ${isValid}`}>
            <input
              className={styles.input}
              placeholder="Enter your email"
              type="text"
              value={email}
              onChange={handleInputChange}
              onKeyDown={handleEnterClick}
            />
            <img
              className={`${isValid}`}
              src={buttonImage}
              alt="paper-plane"
              onClick={handleButtonClick}
            />
          </div>
          {/* 유효성 검사 실패시 보여지는 부분 */}
          {isError && (
            <div className={styles.error}>Please enter a valid email!</div>
          )}
        </div>
      </div>
    </section>
  );
}
