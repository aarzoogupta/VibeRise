import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-opacity-90 text-white px-4 shadow-lg border-b border-gray-600 backdrop-blur-md flex items-center justify-between z-50">

      <div className="ml-4">

        <img src="./logo.png" alt="Logo" className="w-32 h-32 max-w-32 max-h-32 object-contain" />

      </div>
      <div className="mr-8">
        <ul className="flex space-x-6 text-lg font-medium">
          {[
            { path: "/", label: "Home" },
            { path: "/MentorConnect", label: "MentorConnect" },
            { path: "/Event", label: "Events" },
            { path: "/Discover", label: "Discover" },
            { path: "/sponsorships", label: "Sponsorships" },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className={`relative hover:text-yellow-300 transition duration-300 ${location.pathname === path ? 'border-b-2 border-yellow-300' : ''}`}
                aria-label={label}
              >
                {label}
              </Link>
            </li>
          ))}
          {user ? (
            <li>
              <Link
                to="/UserProfile"
                className={`relative hover:text-yellow-300 transition duration-300 ${location.pathname === "/UserProfile" ? 'border-b-2 border-yellow-300' : ''}`}
                aria-label="Profile"
              >
                Profile
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className={`relative hover:text-blue-300 transition duration-300 ${location.pathname === "/login" ? 'border-b-2 border-blue-300' : ''}`}
                  aria-label="Login"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className={`relative hover:text-green-300 transition duration-300 ${location.pathname === "/signup" ? 'border-b-2 border-green-300' : ''}`}
                  aria-label="Sign Up"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
