import { useState, useRef } from "react";
import Timer from "./Timer";

export default function TaskCreator({addItem}) {
 
  const timerValue = useRef(0)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value)
    setError('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, timerValue.current)
    if(value){
      addItem(value)
    }else{
      setError("Please name the task...")
    }
  }
  const handleTimerChange = (time) => {
    timerValue.current = time;
  }
  
  return(
      <form className="currentTaskInputForm" onSubmit={handleSubmit}>
        <label htmlFor="currentTaskInput">Current Task</label>
        <input 
          type="text"
          placeholder="Enter Task Information..."
          value={value}
          onChange={handleChange}
          name="currentTaskText"
          />
          {error && <span>{error}</span>}
        <Timer changeAction={handleTimerChange} />
        <button
          className="fullWidthBtn basicBtn"
          type="submit"
        >Capture Task</button>
      </form>
  )
}