import {v1} from "uuid";
import {renderTree} from "./renderTree";


export type PostType = {
  id: string
  message: string
}
export type RootStateType = {
  posts: Array<PostType>
  newTextMessage: string
}


export let state = {
  newTextMessage: '',
  posts: [
    {id: v1(), message: 'Hello'}
  ]
}

export const addMessage = (postText:string) => {
  let newMessage = {id: v1(), message: postText}
  state.posts.push(newMessage)
  renderTree(state)
}
export const addText = (newText: string) => {
  state.newTextMessage = newText
  renderTree(state)
}