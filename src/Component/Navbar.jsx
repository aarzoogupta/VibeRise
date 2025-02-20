import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white mt-4 p-4 shadow-lg rounded-xl w-3/4 mx-auto">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-10 text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300">🏠 Home</Link>
          </li>
          <li>
            <Link to="/MentorConnect" className="hover:text-yellow-400 transition duration-300">🤝 MentorConnect</Link>
          </li>
          <li>
            <Link to="/Event" className="hover:text-yellow-400 transition duration-300">🎭 Events</Link>
          </li>
          <li>
            <Link to="/UserProfile" className="hover:text-yellow-400 transition duration-300">👤 User Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
