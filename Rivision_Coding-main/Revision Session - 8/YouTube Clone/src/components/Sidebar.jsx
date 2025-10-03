import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Trending</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Subscriptions</a></li>
        <li className="mb-2"><a href="#" className="hover:text-gray-300">Library</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
