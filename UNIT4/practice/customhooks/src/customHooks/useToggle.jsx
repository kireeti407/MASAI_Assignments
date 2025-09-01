import { useState } from "react";

export default function useToggle(intial='Light'){
    const [value,setValue]=useState(intial)
    const setToggle=(val)=>{
        setValue(val)
    }

    return [value,setValue]
}

