import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ADD, REMOVE, TOGGLE } from "../features/TaskSlice"


export default function Task(){
    const Task=useRef({task:"",status:false,id:null})
    const tasks=useSelector(state=>state.AddTask)
   
   
    const dispatch= useDispatch()
    return (<>
        <input type="text" name="task"  onChange={(e)=>Task.current={task:e.target.value,status:false,id:Date.now()} }/>
        <button onClick={()=>{dispatch(ADD(Task))}}>Add</button>
        <div>
            {tasks && tasks.map((e)=>(
                <div>
                    <span onClick={()=>{dispatch(TOGGLE(e.id))}} style={{textDecoration:(e.status)?"line-through":"none"}}>{e.task}</span> <button onClick={()=>{dispatch(REMOVE(e.id))}}>❌</button>
                </div>
            ))}
        </div>

        
    </>)

}