import { useState } from "react";
import React from 'react'
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App () {
  const[tasks,setTasks]=useState([]);
  const addTask =(task)=>{
    setTasks([...tasks,task])
};
const deleteTask=(taskName)=>{
  setTasks(tasks.filter(task=>task.name!==taskName))
}
  return (
    <div>
<h1>To Do List App</h1>
<AddTask addTask={addTask} />
<TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App