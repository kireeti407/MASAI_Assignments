const intial={count:0}
 
export default function reducer(state=intial,action){
    switch(action.type){
        case "INCREMENT":
            return ({count:state.count+1})
        case "DECREMENT":
            return ({count:state.count-1})
        default:
            return state
    }
}