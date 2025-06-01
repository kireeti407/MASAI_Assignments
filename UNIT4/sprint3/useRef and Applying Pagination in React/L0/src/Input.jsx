import { useState } from "react";
import { useRef } from "react";

export default function Input(){
    const focus=useRef(null)
    const [state,setstate]=useState("")
    return(
        <>
         <input type="text" name="" id="" ref={focus} placeholder="enter somthing"/> <button onClick={
            ()=>{
                focus.current.focus()
                setstate("Focused!")
            }
            }>click</button>
            <p>{state}</p>
        </>
    )
}