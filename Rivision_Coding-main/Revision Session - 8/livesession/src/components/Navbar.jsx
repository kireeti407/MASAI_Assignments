import React from "react"   
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",padding:"10px",backgroundColor:"lightgrey"}}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Navbar