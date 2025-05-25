import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  async function fecthdata() {
    let res=await fetch("http://api.quotable.io/random")
    let d=await res.json()
    setData(d)
  }
  useEffect(()=>{
    setTimeout(()=>{
      fecthdata()
    },30000)
    fecthdata()
  },[])
  

  return (
    <>  
        <p><strong>content:</strong>{data.content}</p>
        <p><strong>author:</strong>{data.author}</p>
        <button onClick={fecthdata}>Get New Quote</button>

    </>
  )
}

export default App
