import React from 'react'
import '../App.css'

const Task = ({text, completed, id, deleteTask}) => 
{

  return (  
    <div className={'task-container completed'}>
        <div className='task-text-container'>{text}</div>
        <div className='task-delete-button'><img onClick={() => deleteTask(id)} src="../../public/close-icon.png" alt="" /></div>
    </div>
    
  )
}

export default Task