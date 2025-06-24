"use client";

import { ComponentProps } from "@/type";
import { useState } from "react";
import styles from "./list.module.scss";

export default function List({ className }: ComponentProps) {
    const lists = Array.from({ length: 10 }, (_, i) => `${i + 1}번 리스트`);

    const [selectedIdx, setSelectedIdx] = useState<number | null>(0);

    return (
        <ul className={styles["list-container"]}>
            {lists.map((text, index) => (
                <li
                    key={index}
                    className={`${styles.list} ${
                        selectedIdx === index ? styles.active : ""
                    }`}
                    onClick={() => setSelectedIdx(index)}
                >
                    {text}
                </li>
            ))}
        </ul>
    );
}
