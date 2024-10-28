import React from "react";

export default function GameOver({ winner, handleRematch }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={handleRematch}>Rematch!</button>
      </p>
    </div>
  );
}
