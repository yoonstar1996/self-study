import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./clock.module.scss";

export default function Clock() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [amPm, setAmPm] = useState<string>("AM");

    const handleDark = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const amPm = hours < 12 ? "AM" : "PM";

            hours = hours % 12 || 12;

            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
            setAmPm(amPm);
        };
        updateTime();
        const timerId = setInterval(updateTime, 1000);
        return () => clearInterval(timerId);
    }, [hours, minutes, seconds, amPm]);

    return (
        <section
            className={`${styles.section} ${isDarkMode ? styles.dark : ""}`}
        >
            <div className={styles.container}>
                <div className={styles.icons} onClick={handleDark}>
                    {isDarkMode ? (
                        <i>
                            <Sun />
                        </i>
                    ) : (
                        <i>
                            <Moon />
                        </i>
                    )}
                </div>
                <div className={styles.time}>
                    <div className={styles["time-colon"]}>
                        <div className={styles["time-text"]}>
                            <div className={styles.num}>{hours}</div>
                            <div className={styles.text}>Hours</div>
                        </div>
                        <div className={styles.colon}>:</div>
                    </div>
                    <div className={styles["time-colon"]}>
                        <div className={styles["time-text"]}>
                            <div className={styles.num}>{minutes}</div>
                            <div className={styles.text}>Minutes</div>
                        </div>

                        <div className={styles.colon}>:</div>
                    </div>
                    <div className={styles["time-colon"]}>
                        <div className={styles["time-text"]}>
                            <div className={styles.num}>{seconds}</div>
                            <div className={styles.text}>Seconds</div>
                        </div>

                        <div className={styles.am_pm}>{amPm}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
