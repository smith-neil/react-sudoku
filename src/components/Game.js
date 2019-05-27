import React from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";

const Game = ({ board }) => {
  return (
    <div className="game">
      <Header />
      <GameBoard board={board} />
    </div>
  );
};

export default Game;
