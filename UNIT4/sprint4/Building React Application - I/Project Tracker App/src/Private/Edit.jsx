import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editProject } from "../features/ProjectSlice"

export default function Edit(){
    const details=useSelector(state=>state.Project.editDetails)
    const dispatch=useDispatch()
    const [item,setItem]=useState(details)
    return(
        <>
            <h1>Edit Profile</h1>
            <label><strong>Title: </strong> </label><input type="text" name="title" value={item.title}  onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}/><br /><br />
            <lable><strong>Discription: </strong></lable><textarea  name="discription" value={item.discription}  onChange={(e)=>{setItem({...item,[e.target.name]:e.target.value})}}/><br/><br />
            <button onClick={()=>dispatch(editProject(item))}>edit</button>
        </>
    )
}