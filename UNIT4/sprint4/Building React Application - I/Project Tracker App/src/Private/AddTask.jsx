import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProject } from "../features/ProjectSlice"

export default function AddTask(){
    const [projectdetails,setProjectdetails]=useState({title:"",discription:"",email:localStorage.getItem("email")})
    const dispatch=useDispatch()
    const handlechange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        const date=Date.now()
        setProjectdetails({...projectdetails,[name]:value,date:date.toString()})
    }
    return(
        <>
         <h1>Add Project</h1>
         <div>
            <input type="text" name="title" value={projectdetails.title} placeholder="project title" onChange={(e)=>{handlechange(e)}}/><br/><br />
            <textarea name="discription" value={projectdetails.discription} placeholder="discription" onChange={(e)=>{handlechange(e)}}/><br/>
            
            <button onClick={()=>{
                
                dispatch(addProject(projectdetails))
                setProjectdetails({title:"",discription:""})
            }}>Add</button>
            
         </div>
        </>
    )
}