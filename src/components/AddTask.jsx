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
    document.getElementById('input').value = ""; 
    console.log(newTask)
  }

  return (
        <div className='addtask-container'>
          <div className='text-container'>
            <input onChange={addingText} 
                   autoComplete='off'
                   type="text"
                   placeholder='Enter a task...'
                   id='input'/>
          </div>
          <div 
            className='add-button-container'>
            <button>
            <img 
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB9klEQVR4nO3cMW4TQRxG8QdIOAX0ScjVuAGQivhEXIWQKtBwBXriJjShWCNBtBGZ8e63M5v3k6axNPL4ybLj/TsGSZIkSZIkARwB58AVsAPuVrp2wBfgA7CZpFyBM+Bb5cF7Xl/3jz3iiKcZ+e/YkWf2+QIPrrX1/uCKj3C10INraV2WRntWugG4AV5V7FuTHfC6ZENN6LuKPWtU1O75XKfQvwwdYugQQ4cYOqSn0L+AC+B0v7b721ZrqQ8JFyNn2S54niI9/R19Cvy4d9vxyG0pRe16Cv3QWVs7z6ieXqO7ZugQQ4cYOsTQIYYOMXSIoUMMHWLoEEOHGDrE0CGGbljpBfJb4CNwssRh/+OEYaBwy8wX/mtMMRlpTc2kZnalB2rxmXzfMTOHTrxG10xx0l7MfQeJ0G8D93GoJs9Y82a4ZRiutubP1xZmfzN0OFvP4WyLDB1i6BBDhxg6xNAhhg4xdIihQwwdYugQQ4cYOsTQIT2FHrue/SZ+iko9hR6bgjQ5GZlK8n/5HprUHDIZmWoV6WnC0honLC0ydIihQwwdYuiQmtC7yU/Rn5+lG2pCf6/YszbFDWpCf6rYszaRBhuGH0Jd6hPZ0usaeHlwxUc642nGvmaBC1kbhl+dvWT4vdKlI8y1boDPwDuCz2RJkiRJkqSW/QZrpOfeXwESpQAAAABJRU5ErkJggg=="
              onClick={sendingTask}
            />          
            </button>
          </div>
        </div>

  )
}

export default AddTask