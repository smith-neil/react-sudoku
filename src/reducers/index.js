export default (state = {}, action) => {
  switch (action.type) {
    case "UNDO":
      return {
        ...state,
        moveCount: state.moveCount - 1
      };
    case "REDO":
      return {
        ...state,
        moveCount: state.moveCount + 1
      };
    case "RESTART":
      return state;
    default:
      return state;
  }
};
