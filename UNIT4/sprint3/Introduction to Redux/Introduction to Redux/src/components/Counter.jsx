import { useDispatch, useSelector, useStore } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/action";

export default function Counter(){
    const count=useSelector((state)=>state.count)
   
    const dispatch=useDispatch()
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={()=>{dispatch(INCREMENT())}}>Increment</button>
            <button onClick={()=>{dispatch(DECREMENT())}}>Decrement</button>
        </>
    )
}