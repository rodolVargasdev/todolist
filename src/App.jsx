import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import ListTask from './components/ListTask'
import AddTask from './components/AddTask'

function App() {

  return (
    <div className="App">
      <div className="task-app-container">
        <div className='task-title'>
          <h1>My to do list</h1>
        </div>    
        <ListTask/>
      </div>
    </div>
  )
}

export default App;
