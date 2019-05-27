import React from "react";

const Cell = ({ idx, xIdx, yIdx, val }) => {
  return <div className="cell">C</div>;
};

const GameBoard = ({ board }) => {
  return (
    <div className="gameboard">
      {board.map(row =>
        row.map(cell => (
          <Cell
            key={cell.key}
            idx={cell.cellIdx}
            xIdx={cell.xIdx}
            yIdx={cell.yIdx}
          />
        ))
      )}
    </div>
  );
};

export default GameBoard;
