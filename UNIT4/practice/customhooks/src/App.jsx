import { useState } from 'react'

import './App.css'
import useToggle from './customHooks/useToggle'
import useTimmer from './customHooks/useTimmer'

function App() {
  const [toggle,setToggle] = useToggle("light")
  const [time,start,stop,reset]=useTimmer()

  return (
   <>
      <h1>time:{time}</h1>
      <button onClick={()=>{start()}}>start</button>
      <button onClick={()=>{stop()}}>stop</button>
      <button onClick={()=>{reset()}}>reset</button>

      <h1>toggle:{toggle}</h1>
      <button onClick={()=>{setToggle('light')}}>light</button>
      <button onClick={()=>{setToggle('dark')}}>light</button>
        
    </>
  )
}

export default App
