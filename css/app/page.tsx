"use client";

import Button from "./components/button";
import { CardCircle, CardSquare } from "./components/card";
import List from "./components/list";
import "./page.scss";

export default function Home() {
    return (
        <div>
            <div className="typewriter">
                <h1 className="title">CSS 연습</h1>
            </div>
            <div className="container">
                <div className="button-container">
                    <h2>버튼들</h2>
                    <div className="button-wrap">
                        <Button className="first-button" text="1번 버튼" />
                        <Button className="second-button" text="2번 버튼" />
                    </div>
                </div>
                <div className="list-container">
                    <h2>리스트</h2>
                    <ul className="list-wrap">
                        <List className="list" />
                    </ul>
                </div>
                <div className="card-container">
                    <h2>카드</h2>
                    <div className="card-wrap">
                        <CardSquare />
                        <CardCircle />
                    </div>
                </div>
            </div>
        </div>
    );
}
