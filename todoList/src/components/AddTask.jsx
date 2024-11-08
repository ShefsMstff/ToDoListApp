import { useState } from "react";
import React from 'react'

function AddTask ({addTask})  {
    const[taskName,setTaskname]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(taskName){
            addTask({name:taskName,completed:false})
            setTaskname('');
        }
    };
       
  return (
    <div>
<form onSubmit={handleSubmit}>
    <input type="text" 
    value={taskName}
    onChange={(e)=>setTaskname(e.target.value)}
    placeholder="Add a new task"/>
    <button type="submit">Add task</button>
    </form>
    </div>
  )
}

export default AddTask;