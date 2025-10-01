import { useContext } from "react";

const login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {login}=useContext(AuthContext);
    const navigate=useNavigate();
    const handlesubmit=async()=>{
        const res= await fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "x-api-key":'reqres-free-v1'
            },
            body:JSON.stringify({email,password})
        })
        const data=await res.json();     
        if(data.token && res.ok){
            login(data.token);
            navigate("/");
        }
        setEmail("");
        setPassword("");

    }
    return (
        <div>       
           <input type="text" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} />
           <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
           <button onClick={handlesubmit}>Login</button>
        </div>
    )
}       