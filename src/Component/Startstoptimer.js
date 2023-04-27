import React from 'react'
import {useState, useEffect} from 'react';


var temp = undefined;
const Startstoptimer = () => {
    const [watch, setWatch] = useState(0);
      const [started, setStarted] = useState(false);
      const startWatch = () => {
        temp = setInterval(() => {
            setWatch(x => x + 1)
        },1000)
        setStarted(true)
      }
      const stopWatch = () => {
        // console.log("k", temp)
        clearInterval(temp);
        setStarted(false)
      }
      const resetWatch = () => {
        setWatch(0)
        clearInterval(temp);
        setStarted(false)
      }
  return (
    <div>
        <h1>Start Stop Timer</h1>
        <h1>{watch}</h1>
        <button className='start' disabled={started} onClick={startWatch}>Start</button>
        <button className='stop' onClick={stopWatch}>Stop</button>
        <button className='start'onClick={resetWatch}>Reset</button>
    </div>
  )
}

export default Startstoptimer