import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
function App() {
  const [onAuth, setAuth] = useState(false)

  return (
    <>
      <Navbar auth={setAuth}></Navbar>
      {onAuth ? <h1>Welcome, User</h1>:<h1>Please log in</h1>}
      </>
  )
}

export default App
