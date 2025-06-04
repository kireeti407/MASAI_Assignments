const intial=[]

export default function reducer(state=intial,action){
    
    switch(action.type){
        case "ADD":
            return [...state,action.Payload]
        case "DELETE":
            let arr=state.filter((e)=>e.id !== action.Payload)
            console.log(arr,action.Payload)
            return arr
        case "COMPLETE":
            return (state.map((e)=>{
                if (e.id==action.Payload){
                    e.status=!e.status
                }
                return e
            }))
        default:
            return state

    }
}