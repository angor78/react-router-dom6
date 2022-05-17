import React from 'react';
import './App.css';
import {TextAreaWithButton} from "./TextAreaWithButton";
import {RootStateType} from "./state";

export type AppPropsType = {
  state: RootStateType
  addMessage: (postText: string) => void
  addText: (newText: string) => void
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <TextAreaWithButton text={props.state.newTextMessage}
                          posts={props.state.posts}
                          addMessage={props.addMessage}
                          addText={props.addText}/>
    </div>
  );
}

export default App;
