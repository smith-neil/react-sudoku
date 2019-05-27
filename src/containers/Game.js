import React from "react";
import { connect } from "react-redux";
import Game from "../components/Game";

const mapState = state => ({
  board: state.board
});

export default connect(mapState)(Game);
