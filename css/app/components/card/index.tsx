import styles from "./card.module.scss";

function CardSquare() {
    return (
        <div className={styles["card-square"]}>
            <h2>Card</h2>
        </div>
    );
}

function CardCircle() {
    const circles = Array.from({ length: 5 });

    return (
        <div className={styles["card-circle"]}>
            {circles.map((_, index) => (
                <div key={index} className={styles.circle} />
            ))}
        </div>
    );
}

export { CardCircle, CardSquare };
