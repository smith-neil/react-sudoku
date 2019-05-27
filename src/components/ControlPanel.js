import React from "react";

const ControlPanel = ({ canUndo, canRedo, undo, redo, restart }) => {
  return (
    <div className="controls">
      <button className="undo" onClick={undo} disabled={!canUndo}>
        Undo
      </button>
      <button className="redo" onClick={redo} disabled={!canRedo}>
        Redo
      </button>
      <button className="restart" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default ControlPanel;
