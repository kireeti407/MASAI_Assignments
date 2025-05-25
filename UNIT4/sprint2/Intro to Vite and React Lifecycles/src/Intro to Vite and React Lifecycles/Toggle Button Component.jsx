import { useState } from "react"

function ToggleButton({text}){
    let [color,setColor]=useState("green")
    return(
        <>
            <h1 style={{color:color}}>{text}</h1>
            <button onClick={()=>{setColor("green")}} >ON</button>
            <button onClick={()=>{setColor("red")}}>OFF</button>
        </>
    )
}
export default ToggleButton