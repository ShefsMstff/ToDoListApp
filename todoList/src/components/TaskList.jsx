import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask }) {
  return (
    <div style={{width:'400px', padding: '10px', margin :'10px 0', border: '1px solid gray', borderRadius: '8px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
