import { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { ADD } from '../redux/action'
export default function Add(){
    const item=useRef()
    const dispatch=useDispatch()
    return (
        <>
          <input type="text" name="" id="" onChange={(e)=>{item.current={title:e.target.value,status:false,id:Date.now()}}}/>
          <button onClick={()=>{dispatch(ADD(item.current))}}>Add</button>
        </>
    )
    
}    