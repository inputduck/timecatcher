import { useState  } from 'react';
import './App.css';


import CurrentTask from './components/TaskCreator';
import FooterControls from './components/FooterControls';
// import {timerValue} from './components/Timer'


function App() {
  
  const [currentTask, setCurrentTask] = useState('')
  const [savedTasks, setSavedTasks] = useState([])
  

  
  
  
  function addItem(savedTask, ) {
    
    // if (!currentTask) {
    //   alert("Press enter a task description.");
    //   return;
    // }
    const newTask = {
      id: Math.floor(Date.now() / 1000),
      date: Date.now(),
      elapsedTime: 5,
      taskText: savedTask,
    };

    setSavedTasks((savedTasks) => [...savedTasks, newTask]);
    setCurrentTask('')
  }

  function deleteItem(id) {
    const newArray = savedTasks.filter((item) => item.id !== id)
    setSavedTasks(newArray)  
  }


  
  return (
    <div className="container">
      <h1>TimeCatcher</h1>
      <CurrentTask addItem={addItem} setCurrentTask={addItem} currentTask={currentTask}/>
      
      
      
      <hr />
      <h2>Saved Tasks</h2>
      <div className="savedTaskList">
        
        <ul>
          {savedTasks.map((savedTask) => {
            return (
              
                <li key={savedTask.id}>
                  {savedTask.elapsedTime}
                  {savedTask.taskText}
                  <button
                    className="deleteBtn"
                    onClick={() => deleteItem(savedTask.id)}
                    
                  >❌</button>
                </li>             

             
            )
          })}
        </ul>
      </div>
  

      <FooterControls />
    </div>
  );
}

export default App;
