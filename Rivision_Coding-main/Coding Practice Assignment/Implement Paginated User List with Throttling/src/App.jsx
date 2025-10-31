import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginatedUsers from './PaginatedUsers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PaginatedUsers />
    </>

  )
}

export default App
