import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../Firebase/FirebaseConfig";
import { motion } from "framer-motion";
function UserProfile() {
  const [tab, setTab] = useState("overview");
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(fireDB, "events"));
      setEvents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  let eventCount=events.length;
  let maxEvents=5;
  const handleOrganizeEvent = () => {
    if (eventCount < maxEvents) {
      navigate("/organize-event");
    } else {
      alert("🚀 Upgrade to premium to organize more events!");
      navigate("/premium");
    }
  };
  const [aboutMe, setAboutMe] = useState([
    "Sunidhi Chauhan is an Indian playback singer. Known for her vocal range and versatility, she has recorded songs for films in several Indian languages and received accolades including three Filmfare Awards and a Filmfare Award South .She is often praised for her charismatic stage presence and Vocal belting ability.Passionate artist bringing creativity to life. Always looking for new opportunities!"
  ]);
  const [newInfo, setNewInfo] = useState("");
  const [showInput, setShowInput] = useState(false); 

  const handleAddClick = () => {
    setShowInput(true); 
  };

  const addInformation = () => {
    if (newInfo.trim() !== "") {
      setAboutMe([...aboutMe, newInfo]);
      setNewInfo(""); 
      setShowInput(false); 
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-opacity-30 text-black p-6 border">
      <div className="shadow-xl rounded-2xl p-6 flex items-center w-3/4 mx-auto border border-white">
        <div className="w-24 h-24 rounded-full border-4 border-yellow-200  flex items-center justify-center">
         <img>
         </img>
        </div>

        <div className="ml-6">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <p className="text-yellow-200">🎭 Dancer | 🎸 Musician | 🎥 Filmmaker</p>
        </div>
      </div>

    
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

     
      <motion.div 
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="mt-6 w-3/4 mx-auto">
        {tab === "overview" && (
          <div className=" p-6 rounded-lg shadow-lg border border-white ">
            <h2 className="text-xl font-semibold text-yellow-200">About Me</h2>
        {!showInput && (
          <button
            onClick={handleAddClick}
            className="mt-4 bg-yellow-200 hover:bg-yellow-400 text-gray-900 py-2 px-4 rounded"
          >
            Add about yourself!!
          </button>
        )}

        {/* Input Box appears when showInput is true */}
        {showInput && (
          <div className="mt-4">
            <textarea
              value={newInfo}
              onChange={(e) => setNewInfo(e.target.value)}
              placeholder="Write about yourself..."
              className="w-full p-2 border rounded text-black-900"
            />
            <button
              onClick={addInformation}
              className="mt-2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        )}

        <div className="mt-4">
          {aboutMe.map((info, index) => (
            <p key={index} className="text-black-300 mt-2">
              {info}
            </p>
          ))}
        </div>
          </div>
        )}

        {tab === "events" && (
          <div className=" p-6 rounded-lg shadow-lg border border-white">
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
          <div className=" p-6 rounded-lg shadow-lg border border-white">
            <h2 className="text-xl font-semibold text-yellow-200">Showcased Work</h2>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <img src="https://via.placeholder.com/150" alt="Work 1" className="rounded-lg" />
              <img src="https://via.placeholder.com/150" alt="Work 2" className="rounded-lg" />
            </div>
          </div>
        )}

        {tab === "sponsorships" && (
          <div className=" p-6 rounded-lg shadow-lg border border-white">
            <h2 className="text-xl font-semibold text-yellow-200">Sponsorships</h2>
            <p className="text-gray-300 mt-2">🎗 You have received $500 in sponsorships.</p>
            <button className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
              💰 Request More Sponsorships
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default UserProfile;

