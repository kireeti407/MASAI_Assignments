import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login({set}){
    const auth = getAuth(app);
    const [credentials,setcredentials]=useState({password:"",email:""})
    const navigate =useNavigate()
     const Login=()=>{
        localStorage.setItem("email",credentials.email)
        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
          .then((userCredential) => {
            const user = userCredential.user;
            if(user){
                set(true)
                navigate('/')
            }
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
     }
    return(
        <div>
            <h4>Login</h4>
            <input type="email" placeholder="Enter email" name="email" onChange={(e)=>{setcredentials({...credentials,[e.target.name]:e.target.value})}}/><br/>
            <input type="password" name="password" placeholder="Password" onChange={(e)=>{setcredentials({...credentials,[e.target.name]:e.target.value})}}/><br />
            <button onClick={()=>{Login()}}>Login</button>
        </div>
    )
}