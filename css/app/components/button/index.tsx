"use client";

import { ComponentProps } from "@/type";
import { MouseEvent } from "react";
import styles from "./button.module.scss";

export default function Button({ className, text }: ComponentProps) {
    const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.textContent);
    };
    return (
        <button
            type="button"
            className={styles[className!]}
            onClick={(e) => handleButtonClick(e)}
        >
            {text}
        </button>
    );
}
