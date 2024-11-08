import React from 'react';

function Task({ task, deleteTask }) {
  return (
    <div style={{ width:'300px', marginBottom: '10px', padding: '10px', backgroundColor: 'gray', border: '1px solid gray', borderRadius: '5px' }}>
      <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {task.name}
        <button 
          onClick={() => deleteTask(task.name)} 
          style={{
            padding: '5px 10px',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default Task;
