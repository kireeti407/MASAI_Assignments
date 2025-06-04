export const ADD=(data)=>{
    return ({type:"ADD",Payload:data})
}
export const DELETE=(id)=>{
    return ({type:"DELETE",Payload:id})
}

export const COMPLETE=(id)=>{
    return {type:"COMPLETE",Payload:id}
}