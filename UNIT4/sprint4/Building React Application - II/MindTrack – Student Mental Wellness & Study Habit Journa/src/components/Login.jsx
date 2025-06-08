
import React from "react";
const Login = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <input className="block w-full p-2 mb-3 border" type="email" placeholder="Email" />
        <input className="block w-full p-2 mb-3 border" type="password" placeholder="Password" />
        <button className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
};
export default Login;
