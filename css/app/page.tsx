"use client";

import Button from "./components/button";
import { CardCircle, CardSquare } from "./components/card";
import Clock from "./components/clock";
import Input from "./components/input";
import List from "./components/list";
import Navigation from "./components/navigation";
import Toggle from "./components/toggle";
import "./page.scss";

export default function Home() {
    return (
        <div>
            <div className="typewriter">
                <h1 className="title">CSS 연습</h1>
            </div>
            <div className="container">
                <div className="clock-container">
                    <h2>Clock</h2>
                    <div className="clock-wrap">
                        <Clock />
                    </div>
                </div>
                <div className="navigation-container">
                    <h2>Navigation</h2>
                    <div className="navigation-wrap">
                        <Navigation />
                    </div>
                </div>
                <div className="button-container">
                    <h2>Button</h2>
                    <div className="button-wrap">
                        <Button className="first-button" text="1번 버튼" />
                        <Button className="second-button" text="2번 버튼" />
                    </div>
                </div>
                <div className="list-container">
                    <h2>List</h2>
                    <ul className="list-wrap">
                        <List className="list" />
                    </ul>
                </div>
                <div className="card-container">
                    <h2>Card</h2>
                    <div className="card-wrap">
                        <CardSquare />
                        <CardCircle />
                    </div>
                </div>
                <div className="input-container">
                    <h2>Input</h2>
                    <div className="input-wrap">
                        <Input />
                    </div>
                    <h2></h2>
                    <div className="toggle-wrap">
                        <Toggle />
                    </div>
                </div>
            </div>
        </div>
    );
}
