import { useState } from 'react'
import Task from './Task'
import AddTask from './AddTask'
import React from 'react'
import '../App.css'

const ListTask = () => {
  
  const [ListTasks, setListTasks] = useState([])

  const addingTask = task =>
  {
    const updateList = [task, ...ListTasks]
    setListTasks(updateList);
    console.log(ListTasks);
  }
  const deleteTask = id =>
  {
    const updateList = ListTasks.filter(task => task.id !== id);
    setListTasks(updateList);
  }

  return (
    <div className='list-task-container'>
        <AddTask onClick={addingTask}></AddTask>
        <div>
          {
            ListTasks.map((task) =>
              <Task 
                id={task.id}
                text={task.description}
                deleteTask={deleteTask} />
            )
          }
        </div>
        
    </div>
  )
}

export default ListTask