import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">YouTube Clone</div>
        <div>
          <input type="text" placeholder="Search" className="bg-gray-700 text-white rounded-md px-3 py-1" />
        </div>
        <div>
          <button className="text-white mr-4">Login</button>
          <button className="bg-red-600 text-white rounded-md px-3 py-1">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
