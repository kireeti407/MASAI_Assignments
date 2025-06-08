import { createContext, useEffect, useState } from "react";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

export const AuthContext=createContext()

export default  function Auth({children}){
    const[user,setUser]=useState(null)
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            localStorage.setItem("email",currentUser?currentUser.email:"null")
            setUser(currentUser);
        });
        return () => unsubscribe(); 
    }, []);


    return(
        <>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </>
    )
    
}