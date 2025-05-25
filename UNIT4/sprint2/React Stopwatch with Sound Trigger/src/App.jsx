import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [sece, setCount] = useState(0)
  const [min,setMinute]=useState(0)
  const[stop,setStop]=useState(false)
  useEffect(()=>{
    let int
    if(stop){
      int=setInterval(()=>{
           setCount((prev)=>{
            if(prev==59){
              setMinute(prev=>prev+1)
              return 0
            }
            return prev+1
           }) 
        },1000)
    }
    return()=> clearInterval(int)
  },[stop])

  return (
    <>
      <h1>{min}:{sece}</h1>
      <button onClick={()=>setStop(true)}>Start</button>
       <button onClick={()=>setStop(false)}>Stop</button>
    </>
  )
}

export default App
