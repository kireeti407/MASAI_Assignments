import { useEffect, useState ,useRef} from "react"

export default function useTimmer(){
    const [time,setTime]=useState(0);
    let  interval=useRef(null)
    const start=()=>{
        interval.current=setInterval(()=>{
            setTime(prev=>prev+1)
        },1000)
        
        
    }

    const stop=()=>{
        clearInterval(interval.current)
    }

    const reset=()=>{
        clearInterval(interval.current)
        setTime(0)
    }
    return [time,start,stop,reset] 
}
