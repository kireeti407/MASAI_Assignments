import { useReducer,useState} from "react";

function reducer(state,action){
    switch (action.type){
        case "name":
            return {...state,name:action.payload}
        case "email":
            return {...state,email:action.payload}
        default :
            return "invalid action type"
    }
}
const intail={name:'',email:''}
export default function FormData(){
    const [data,setData]=useReducer(reducer,intail)
    const [allData,setallData]=useState([])
    const all=()=>{
        
        (data.name && data.email )?setallData((prve)=>[...prve,data]):alert("enter data")
        

    }
    return(
        <>
            <div>
                <input type="email" name={data.email} id="" placeholder="Enter name" onChange={(e)=>{setData({type:"email",payload:e.target.value})}}/>
                <input type="password" name={data.name} id=""  placeholder="Enter password" onChange={(e)=>{setData({type:"name",payload:e.target.value})}}/>
                <button onClick={all}>submit</button>
                
                {
                    allData.map((e,i)=>(
                        <div key={i}>
                                <div>User Email: {e.mail}</div>
                                <div>User Password:{e.name}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}