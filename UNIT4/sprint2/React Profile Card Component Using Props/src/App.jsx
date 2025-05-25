import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  const [count, setProfile] = useState({name:'',age:'',bio:''})
  const [data,setData]=useState([])

  return (
    <>
      <ProfileCard props={{setProfile,setData,count,data}}/>
      <h1>Profile card</h1>
      <div>
        <p><strong>Name:</strong>{count.name}</p>
        <p><strong>Age:</strong>{count.age}</p>
        <p><strong>Bio:</strong><br />{count.bio}</p>
      </div>
      <h1>users</h1>
      <div style={{display:"flex",gap:"20px"}}>
         {data.map((e)=>(
            <div>
              <p><strong>Name:</strong>{e.name}</p>
              <p><strong>Age:</strong>{e.age}</p>
              <p><strong>Bio:</strong><br />{e.bio}</p>
            </div>
         ))}
      </div>
    </>
  )
}

export default App
