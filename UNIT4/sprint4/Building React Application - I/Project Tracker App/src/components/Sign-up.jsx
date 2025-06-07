import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SingUp({set}){
    const [credentials,setcredentials]=useState({name:"",password:"",email:""})
    const auth = getAuth(app);
    const navigate=useNavigate()
``
    const SignUp=()=>{
        localStorage.setItem("email",credentials.email)
        localStorage.setItem("email",credentials.name)
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
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
    return (
        <div>
            <h4>Sign-up</h4>
            <input type="text" placeholder="enter your Name" name="name" value={credentials.name} onChange={(e)=>{setcredentials({...credentials,[e.target.name]:e.target.value})}}/><br />
            <input type="email" placeholder="Enter email" name="email" onChange={(e)=>{setcredentials({...credentials,[e.target.name]:e.target.value})}}/><br/>
            <input type="password" name="password" placeholder="Password" onChange={(e)=>{setcredentials({...credentials,[e.target.name]:e.target.value})}}/><br />
            <button onClick={()=>{SignUp()}}>Sign-up</button>
        </div>
    )
}