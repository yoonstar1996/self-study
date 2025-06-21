import { Camera, House, MessageCircle, Settings, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./navigation.module.scss";

const NAVIGATION_ITEMS = [
    {
        icon: <House />,
        text: "Home",
    },
    {
        icon: <User />,
        text: "Profile",
    },
    {
        icon: <MessageCircle />,
        text: "Messages",
    },
    {
        icon: <Camera />,
        text: "Photos",
    },
    {
        icon: <Settings />,
        text: "Setting",
    },
];

export default function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={styles.navigation}>
            <ul>
                {NAVIGATION_ITEMS.map((item, index) => (
                    <li
                        key={index}
                        className={`${styles.list} ${
                            activeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <Link href="">
                            <span className={styles.icon}>{item.icon}</span>
                            <span className={styles.text}>{item.text}</span>
                        </Link>
                    </li>
                ))}
                <div className={styles.indicator} />
            </ul>
        </div>
    );
}
