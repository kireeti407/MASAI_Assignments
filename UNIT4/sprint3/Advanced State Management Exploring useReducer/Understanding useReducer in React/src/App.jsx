import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Theme from './components/Theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Theme/>
    </>
  )
}

export default App
