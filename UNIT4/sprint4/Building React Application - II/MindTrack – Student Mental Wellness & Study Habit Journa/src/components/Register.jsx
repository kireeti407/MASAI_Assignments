import React from "react";
const Register = () => {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <input className="block w-full p-2 mb-3 border" type="text" placeholder="Name" />
        <input className="block w-full p-2 mb-3 border" type="email" placeholder="Email" />
        <input className="block w-full p-2 mb-3 border" type="password" placeholder="Password" />
        <button className="bg-green-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
};
export default Register;
