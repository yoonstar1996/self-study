import style from "./card.module.scss";

function CardSquare() {
    return (
        <div className={style["card-square"]}>
            <h2>Card</h2>
        </div>
    );
}

function CardCircle() {
    const circles = Array.from({ length: 5 });

    return (
        <div className={style["card-circle"]}>
            {circles.map((_, index) => (
                <div key={index} className={style.circle} />
            ))}
        </div>
    );
}

export { CardCircle, CardSquare };
