import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistsType = {
  id: string
  title: string
  filter: FilterValuesType
}
export type SingleTaskType = {
  id: string
  title: string
  isDone: boolean
}
export type TasksType = {
  [todolistID: string]: Array<SingleTaskType>
}

function App() {

  let todolistID1 = v1();
  let todolistID2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ])

  let [tasks, setTasks] = useState<TasksType>({
    [todolistID1]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "ReactJS", isDone: false},
      {id: v1(), title: "Rest API", isDone: false},
      {id: v1(), title: "GraphQL", isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: "HTML&CSS2", isDone: true},
      {id: v1(), title: "JS2", isDone: true},
      {id: v1(), title: "ReactJS2", isDone: false},
      {id: v1(), title: "Rest API2", isDone: false},
      {id: v1(), title: "GraphQL2", isDone: false},
    ]
  });


  function removeTask(todolistID: string, id: string) {
    setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== id)})
  }

  function addTask(todolistID: string, title: string) {
    setTasks({...tasks, [todolistID]: [{id: v1(), title: title, isDone: false}, ...tasks[todolistID]]})
  }

  function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
    setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ? {...el, isDone:isDone} : el)})
  }

  function changeFilter(todolistID: string, value: FilterValuesType) {
    setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value} : el))
  }


  return (
    <div className="App">
      {todolists.map(el => {
        let tasksForTodolist = tasks[el.id];

        if (el.filter === "active") {
          tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
        }
        if (el.filter === "completed") {
          tasksForTodolist = tasks[el.id].filter(t => t.isDone);
        }


        return (
          <Todolist key={el.id}
                    todolistID={el.id}
                    title={el.title}
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeStatus}
                    filter={el.filter}
          />
        )
      })}

    </div>
  );
}

export default App;
