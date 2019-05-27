export const UNDO = "UNDO";
export const REDO = "REDO";
export const RESTART = "RESTART";

export const undo = () => {
  console.log("undo");
  return {
    type: UNDO
  };
};

export const redo = () => {
  console.log("redo");
  return {
    type: REDO
  };
};

export const restart = () => {
  console.log("restart");
  return {
    type: RESTART
  };
};
