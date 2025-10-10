import { useState } from "react"

export default function Document(){
    const [text,setText]=useState('')
    const [list,setlist]=useState([])
    return(
        <>
            <textarea name="enter" value={text} onChange={(e)=>setText(e.target.value)} onKeyDown={(e)=>{
                if(e.key=='Enter'){
                    setlist(prev=>[...prev,text])
                    setText('')
                }
            }}/>
            <div style={{border:"1px solid"}}>
                {list.map((e)=>(
                    
                    <p>{e}</p>
                ))}
            </div>
        </>
        
    )
}