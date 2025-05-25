

function Counter({setCount,children}){
    return(
        <>
            <h1>{children}</h1>
            <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
            <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
        </>
    )

}
export default Counter