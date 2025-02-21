import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" text-white mt-1 p-4 shadow-lg rounded-xl w-3/4 mx-auto border border-white-700">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6 text-lg font-semibold">
          <li><Link to="/" className="hover:text-yellow-200 transition duration-300">🏠 Home</Link></li>
          <li><Link to="/MentorConnect" className="hover:text-yellow-200 transition duration-300">🤝 MentorConnect</Link></li>
          <li><Link to="/Event" className="hover:text-yellow-200 transition duration-300">🎭 Events</Link></li>
          <li><Link to="/Discover" className="hover:text-yellow-200 transition duration-300">🌟 Discover</Link></li>
          <li><Link to="/sponsorships" className="hover:text-yellow-200 transition duration-300">💰 Sponsorships</Link></li>
          <li><Link to="/UserProfile" className="hover:text-yellow-200 transition duration-300">👤 Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


