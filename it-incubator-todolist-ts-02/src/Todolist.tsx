import React from 'react';
import {ChangeFilterType} from "./App";

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type PropsType = {
  title: string
  tasks: Array<TaskType>
  removeTask: (taskId: number) => void
  changeFilter:(value:ChangeFilterType)=>void
}

export function Todolist(props: PropsType) {
  return <div>
    <h3>{props.title}</h3>
    <div>
      <input/>
      <button>+</button>
    </div>
    <ul>
      {props.tasks.map(t => {
        let removeTask = props.removeTask
        return (
          <li key={t.id}>
            <input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={() => removeTask(t.id)}>✖</button>
          </li>
        )
      })}
    </ul>
    <div>
      <button onClick={()=>props.changeFilter("all")}>All</button>
      <button onClick={()=>props.changeFilter("active")}>Active</button>
      <button onClick={()=>props.changeFilter("completed")}>Completed</button>
    </div>
  </div>
}
