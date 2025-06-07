import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProject } from "../features/ProjectSlice"

export default function AddTask(){
    const [projectdetails,setProjectdetails]=useState({title:"",discription:""})
    const dispatch=useDispatch()
    return(
        <>
         <h1>Add Project</h1>
         <div>
            <input type="text" name="title" value={projectdetails.title} placeholder="project title" onChange={(e)=>{setProjectdetails({...projectdetails,[e.target.name]:e.target.value})}}/><br/><br />
            <textarea name="discription" value={projectdetails.discription} placeholder="discription" onChange={(e)=>{setProjectdetails({...projectdetails,[e.target.name]:e.target.value})}}/><br/>
            
            <button onClick={(e)=>{
                e.preventDefault()
                dispatch(addProject(projectdetails))
                setProjectdetails({title:"",discription:""})
            }}>Add</button>
            
         </div>
        </>
    )
}