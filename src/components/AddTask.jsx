import React from 'react'
import '../App.css'
import { useState } from 'react'

const AddTask = (props) => {
  
  const [DescriptionTask, setDescriptionTask] = useState("");
  const [id, setId] = useState(1);

  const addingText = (e)=>
  {
    setDescriptionTask(e.target.value);
  }
  
  const sendingTask = e =>
  {
    const newId =  id + 1;
    setId(newId);
    const newTask =
    {
      id: id,
      description: DescriptionTask,
      completed: false
    }

    props.onClick(newTask); 
    console.log(newTask)
  }

  return (
        <div className='addtask-container'>
          <div className='text-container'>
            <input onChange={addingText} 
                   autoComplete='off'
                   type="text"
                   placeholder='Enter a task...'/>
          </div>
          <div 
            className='add-button-container'>
            <button ><img onClick={sendingTask} src="../../public/send-icon.png" alt="" /></button>
          </div>
        </div>

  )
}

export default AddTask