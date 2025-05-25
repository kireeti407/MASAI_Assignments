import { useState } from 'react'
import './App.css'
import Counter from './Intro to Vite and React Lifecycles/Counter Component with Initial Value from Props'
import ToggleButton from './Intro to Vite and React Lifecycles/Toggle Button Component'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* Intro to Vite and React Lifecycles */}
      {/* <Counter setCount={setCount}>{count}</Counter> Intro to Vite and React Lifecycles */}
      
      {/* Toggle Button Component */}
      {/* <ToggleButton text="hello world"> </ToggleButton> */}
      
    </>
  )
}

export default App
