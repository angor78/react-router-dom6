import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {addMessage, addText, RootStateType} from "./state";

export const renderTree = (state: RootStateType) => {
  ReactDOM.render(<App state={state} addMessage={addMessage} addText={addText}/>,
    document.getElementById('root'));
}
