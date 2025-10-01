import { useContext } from "react";

const login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {login}=useContext(AuthContext);
    return (
        <div>       
           <input type="text" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} />
           <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
           <button onClick={() => login(email,password)}>Login</button>
        </div>
    )
}       