import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Drawing App</div>
        <ul className="flex space-x-4">
          <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
          <li><Link to="/signup" className="text-white hover:text-gray-300">Signup</Link></li>
          <li><Link to="/canvas" className="text-white hover:text-gray-300">Canvas</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;