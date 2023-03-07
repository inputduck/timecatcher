import React, { useState } from 'react'

export default function Timer() {
  const [time, setTime] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  React.useEffect(() => {
    let interval = null;

    if(timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <>
      <div className="timer">
        <div>
          <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}</span>:
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          
        </div>
      </div>
      <div className="allBtns">
        <div className="controlBtns">
          {!timerOn && time == 0 && (
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
            onClick={() => setTime(0)}
            >Reset</button>
        </div>
        <div>
          <button className="fullWidthBtn basicBtn">Capture</button>
        </div>
      </div>
    </>
  )
}