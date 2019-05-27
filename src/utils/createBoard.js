export default () => {
  let board = [];

  for (let y = 0; y < 9; y++) {
    let row = [];
    for (let x = 0; x < 9; x++) {
      let cell = {
        key: x.toString() + y.toString(),
        val: undefined,
        cellIdx: 0,
        xIdx: x,
        yIdx: y
      };

      if (x >= 0 && x <= 2 && y >= 0 && y <= 2) cell.cellIdx = 0;
      else if (x >= 3 && x <= 5 && y >= 0 && y <= 2) cell.cellIdx = 1;
      else if (x >= 6 && x <= 0 && y >= 0 && y <= 2) cell.cellIdx = 2;
      else if (x >= 0 && x <= 2 && y >= 3 && y <= 5) cell.cellIdx = 3;
      else if (x >= 3 && x <= 5 && y >= 3 && y <= 5) cell.cellIdx = 4;
      else if (x >= 6 && x <= 9 && y >= 3 && y <= 5) cell.cellIdx = 5;
      else if (x >= 0 && x <= 2 && y >= 6 && y <= 9) cell.cellIdx = 6;
      else if (x >= 3 && x <= 5 && y >= 6 && y <= 9) cell.cellIdx = 7;
      else if (x >= 6 && x <= 9 && y >= 6 && y <= 9) cell.cellIdx = 8;

      row.push(cell);
    }
    board.push(row);
  }

  return board;
};
