import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteProject, EDIT, Project } from "../features/ProjectSlice"
import { Navigate, useNavigate } from "react-router-dom"

export default function Dashboard(){
    const data=useSelector((state)=>state.Project.data)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(Project())
    },[])
    return(
        <>
            <h1>welcome to Dashboard</h1>
            {data && data.map((e)=>(
                <div key={e.id}>
                    <h3>Title: {e.title}</h3>
                    <p><strong>discription: </strong>{e.discription}</p>
                    <p><strong>Date: </strong>{e.date}</p>
                    <button onClick={()=>{dispatch(deleteProject(e.id))}}>Delete</button>
                    <button onClick={()=>{
                        dispatch(EDIT(e))
                        navigate("/Edit")
                    }}>Edit</button>
                </div>
            ))}

        </>
    )
}