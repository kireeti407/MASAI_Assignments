import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Document from './Document'
import Jobfeed from './Jobfeed'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        {/* <Document/> */}
        <Jobfeed />
    </>
  )
}

export default App
