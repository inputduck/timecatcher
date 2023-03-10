import React, {  useState, useEffect } from 'react'


export default function Timer({initialTime=0, changeAction, countingInterval=1000}) {
  
  
  const [time, setTime] = useState(initialTime)
  const [timerOn, setTimerOn] = useState(false)


  useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + countingInterval)
        console.log(time)
        changeAction(time)
      }, countingInterval)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn, changeAction, time, setTime, countingInterval])

  

  return (
    <>
      <div className="timerDisplay">
          <span className="hoursDisplay">{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}</span>:
          <span className="minutesDisplay">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
          <span className="secondsDisplay">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="allBtns">
        <div className="controlBtns">
          {!timerOn && time === 0 && (
            <button
              className="startBtn basicBtn"
              onClick={() => setTimerOn(true)}>Start
            </button>
          )}
          {!timerOn && time !== 0 && (
            <button
              className="resumeBtn basicBtn"
              onClick={() => setTimerOn(true)}>Resume
            </button>
          )}
          {timerOn && (
            <button
              className="stopBtn basicBtn"
              onClick={() => setTimerOn(false)}>Stop
            </button>
          )}
          <button 
            className="resetBtn basicBtn"
            onClick={() => {
              setTime(0)
              
            }}
            >Reset</button>
        </div>
        
      </div>
    </>
  )
  
}

