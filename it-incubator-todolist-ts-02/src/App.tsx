import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
export type ChangeFilterType ="all"|"completed"|"active"

function App() {

  const [tasks, setTasks] = useState([
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: true},
    {id: 5, title: "Node JS", isDone: false},
  ])
  const removeTask = (id: number) => {
    let filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
  }
  let [filter, setFilter] = useState<ChangeFilterType>("all")
  let tasksForTodoList = tasks
  if (filter === 'active') {
    tasksForTodoList = tasks.filter((task) =>!task.isDone)
  }
  if (filter === 'completed') {
    tasksForTodoList = tasks.filter((task) =>task.isDone)
  }
  const changeFilter=(value:ChangeFilterType)=>{
    setFilter(value)
  }
  return (
    <div className="App">
      <Todolist changeFilter={changeFilter} title="What to learn" tasks={tasksForTodoList} removeTask={removeTask}/>
    </div>
  );
}

export default App;
