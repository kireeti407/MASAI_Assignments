import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./features/counterSlice";

export default function Counter(){
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()
    return(
        <>
           <h2>count:{count}</h2>
           <button onClick={()=>{dispatch(increment())}}>increment</button>
           <button onClick={()=>{dispatch(decrement())}}>decrement</button>
           <button onClick={()=>{dispatch(reset())}}>reset</button>
        </>
    )
}