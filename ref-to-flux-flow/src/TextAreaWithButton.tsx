import React, {ChangeEvent} from "react";
import './App.css';
import {PostType} from "./state";

type TextAreaWithButtonType = {
  text:string
  posts:Array<PostType>
  addMessage: (postText:string) => void
  addText: (newText: string) => void
}

export const TextAreaWithButton = (props: TextAreaWithButtonType) => {

  const liElements = props.posts.map((el) => <li>{el.message}</li>)

  const onClickHandler = () => {
    props.addMessage(props.text)
  }
  const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.addText(e.currentTarget.value)
  }
  return (
    <div className='text-area-block'>
      <h3>Ref vs Flux flow</h3>

        <textarea value={props.text}
                  onChange={onChangeHandler}>
        </textarea>
        <button onClick={onClickHandler}>+</button>

      <hr/>
      <ol>
        {liElements}
      </ol>
    </div>
  )
}