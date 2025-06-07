import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/Auth"
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";


export default function Navbar({set}){
    const auth = getAuth(app);
    const navigate=useNavigate()
    const user=useContext(AuthContext)
    const Logout=async ()=>{
        await signOut(auth)
        navigate("/")
    }
    return(
        <>
          <div>
            <h3>welcome to Project tracker</h3>
            
            {(!user)?
            <div>
                <button onClick={()=>{
                    navigate('/signup')
                    set(false)
                    }}>Sign Up</button>
                <button onClick={()=>{
                    set(false)
                    navigate('/login')}}>Login</button>
            </div>:
                <div>
                    <button onClick={()=>{navigate("/")}}>Dashboard</button>
                    <button onClick={()=>{navigate("/addproject")}}>Add Project</button>
                    <button onClick={()=>{Logout()}}>logout</button>
                </div>
                
            }

          </div>
        </>
    )
}