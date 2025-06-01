import { useReducer } from "react";
function reducer(state,action){
    switch (action.type){
        case "white":
            return {theme:"white"}
        default :
            return {theme:"black"}
        
    }


}
export default function Theme(){
    const [theme,setTheme]=useReducer(reducer,{theme:"white"})

    return (
        <> 
            <div style={{width:"400px",height:"200px",backgroundColor:theme.theme,color:(theme.theme==="white")?"black":"white"}}>
                <button onClick={()=>{
                    setTheme({type:"white"})
                }}>Light</button>
                <button onClick={()=>{
                    setTheme({type:"black"})
                }}>Dark</button>
                <p>hello this me..</p>
            </div>
        </>
    )
}