import styles from "./toggle.module.scss";

export default function Toggle() {
    return (
        <div className={styles["switch-container"]}>
            <input className={styles.input} id="switch" type="checkbox" />
            <div className={styles["switch-color"]} />
            <label className={styles.label} htmlFor="switch" />
        </div>
    );
}
