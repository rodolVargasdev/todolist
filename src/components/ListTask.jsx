import { useState, useEffect } from 'react'
import Task from './Task'
import AddTask from './AddTask'
import React from 'react'
import '../App.css'

const ListTask = () => {
  
  const [ListTasks, setListTasks] = useLocalStorage('ListTasks', [])


  useEffect(() => {
    console.log("Llamado desde useEffect: ")
    const item = window.localStorage.getItem('ListTasks');
    console.log(item)

  }, [])

  function useLocalStorage(key, initialValue)
	{
		const [storedValue, setStoredValue] = useState(()=>{
			try{
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : initialValue
			}
			catch(e){
				return initialValue;
			}
		})

    const setValue = value => 
		{

			try{
				setStoredValue(value)
				window.localStorage.setItem(key, JSON.stringify(value));
			}
			catch(e){
				console.error(e);
			}
		}

		return [storedValue, setValue]
	}


  /*-----------Adding Task--------------*/

  const addingTask = task =>
  {
    if(task.description.trim())
    {
      const updateList = [task, ...ListTasks]
      task.description = task.description.trim();
      setListTasks(updateList);
    }
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