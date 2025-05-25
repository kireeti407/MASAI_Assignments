import { useState } from 'react'
import './App.css'
import Usercard from './Usercard'

function App() {
  const [data, setData] = useState()
  const [load,setLoad]=useState(true)
  async function fetchData(){
    setLoad(true)
    let res=await fetch("http://jsonplaceholder.typicode.com/users")
    let d=await res.json()
    setData(d)
    console.log(d)
    setLoad(false)
  }
  useState(()=>{
    fetchData()
  },[])

  return (
    <>
        <h1 style={{textAlign:"center"}}>User data</h1>
        {load?(<p>loading...</p>):
        (<div id='user'>{data.map((e)=> <Usercard user={e}/>) }</div>)
      }

    </>
  )
}

export default App
