import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [tab, setTab] = useState("overview");
  const navigate = useNavigate();
  const eventCount = 3;
  const maxEvents = 5;

  const handleOrganizeEvent = () => {
    if (eventCount < maxEvents) {
      navigate("/organize-event");
    } else {
      alert("🚀 Upgrade to premium to organize more events!");
      navigate("/premium");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-opacity-30 text-white p-6">
      <div className="shadow-xl rounded-2xl p-6 flex items-center w-3/4 mx-auto">
        {/* SVG Profile Image */}
        <div className="w-24 h-24 rounded-full border-4 border-yellow-200 bg-gray-700 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-yellow-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0v7"
            />
          </svg>
        </div>

        <div className="ml-6">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-yellow-200">🎭 Dancer | 🎸 Musician | 🎥 Filmmaker</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-6 space-x-6 text-lg font-semibold border-b border-yellow-200">
        {["overview", "events", "work", "sponsorships"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`pb-2 px-4 ${
              tab === item ? "border-b-4 border-yellow-200 text-yellow-200" : "text-gray-300 hover:text-yellow-200"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 w-3/4 mx-auto">
        {tab === "overview" && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-200">About Me</h2>
            <p className="text-gray-300 mt-2">
              Passionate artist bringing creativity to life. Always looking for new opportunities!
            </p>
          </div>
        )}

        {tab === "events" && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-200">Your Events</h2>
            <ul className="mt-2 text-gray-300">
              <li>🎉 Dance Showcase – 15th March</li>
              <li>🎤 Music Festival – 10th April</li>
            </ul>
            <button
              onClick={handleOrganizeEvent}
              className="mt-4 bg-yellow-200 hover:bg-yellow-400 text-gray-900 py-2 px-4 rounded"
            >
              🎭 Organize New Event
            </button>
          </div>
        )}

        {tab === "work" && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-200">Showcased Work</h2>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <img src="https://via.placeholder.com/150" alt="Work 1" className="rounded-lg" />
              <img src="https://via.placeholder.com/150" alt="Work 2" className="rounded-lg" />
            </div>
          </div>
        )}

        {tab === "sponsorships" && (
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-yellow-200">Sponsorships</h2>
            <p className="text-gray-300 mt-2">🎗 You have received $500 in sponsorships.</p>
            <button className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
              💰 Request More Sponsorships
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;

