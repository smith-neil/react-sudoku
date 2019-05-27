import React from "react";
import ControlPanel from "../containers/ControlPanel"; // TODO: should i use containers within components?

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Sudoku</h1>
      <ControlPanel />
    </div>
  );
};

export default Header;
