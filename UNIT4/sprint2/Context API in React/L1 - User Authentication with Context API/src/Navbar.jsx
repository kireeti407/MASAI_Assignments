export default function Navbar({auth}){
    return (
        <> 
            <button onClick={()=>auth(true)}>Login</button>
            <button onClick={()=>auth(false)}>Logout</button>
        </>
    )
}