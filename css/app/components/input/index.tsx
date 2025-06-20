import styles from "./input.module.scss";

export default function Input() {
    return (
        <>
            <input
                type="text"
                id="name"
                autoComplete="off"
                placeholder=" "
                className={styles["form-input"]}
            />
            <label className={styles["form-label"]} htmlFor="name">
                Name
            </label>
        </>
    );
}
