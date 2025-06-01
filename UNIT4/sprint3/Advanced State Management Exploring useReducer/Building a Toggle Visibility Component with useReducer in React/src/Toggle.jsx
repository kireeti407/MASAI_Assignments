import { useReducer } from "react"

function reducer(state,action){
        return {isVisiable:!state.isVisiable}
    }
export default function Toggle(){
    const[state,dispatct]=useReducer(reducer,{isvisible:true})
    return(
        <>
        
          {(state.isVisiable)? <h1>Hello world</h1>:<h1></h1> }
          <button onClick={()=>{
            dispatct()
          }}>Toggle Message</button>
        </>
    )
}