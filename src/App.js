import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import createBoard from "./utils/createBoard";
import { composeWithDevTools } from "redux-devtools-extension";
import Game from "./containers/Game";
import "./App.scss";

const state = {
  moveCount: 4,
  totalMoves: 4,
  hasMoved: true,
  board: createBoard()
};

const store = createStore(rootReducer, state, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

export default App;
