import React, { memo } from "react";
import "./Header.css";

export default memo(function Header() {
  return (
    <header className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </header>
  );
});
