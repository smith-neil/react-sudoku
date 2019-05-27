import React from "react";
import { connect } from "react-redux";
import ControlPanel from "../components/ControlPanel";
import { undo, redo, restart } from "../actions/gameActions";

const mapState = state => ({
  canUndo: state.hasMoved && state.moveCount > 0,
  canRedo: state.moveCount < state.totalMoves
});

const mapDispatch = dispatch => ({
  undo: () => dispatch(undo()),
  redo: () => dispatch(redo()),
  restart: () => dispatch(restart())
});

export default connect(
  mapState,
  mapDispatch
)(ControlPanel);
