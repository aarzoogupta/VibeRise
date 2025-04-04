import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConfig";
import { motion } from "framer-motion";
import Layout from "../Component/Layout";
import PostModal from "./PostModal";
import PostCard from "./PostCard";
import useGetPosts from "../hooks/useGetPosts";

function UserProfile() {
  const [tab, setTab] = useState("overview");
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(db, "events"));
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

const userData = JSON.parse(localStorage.getItem("user"));  
const userId = userData?.id;  
console.log("Extracted userId:", userId);

  const { posts, loading, error } = useGetPosts(userId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState(posts); 

  useEffect(() => {
    if (posts.length > 0) {
      setLocalPosts(posts);
    }
  }, [posts, isModalOpen]);

  const handleNewPost = (newPost) => {
    const postWithUser = {
      ...newPost,
      userProfile: "https://randomuser.me/api/portraits/women/44.jpg",
      userName: "Jane Doe",
      timestamp: "Just now",
    };
    setPosts([postWithUser, ...posts]); // Add new post to the top
  };

  const [aboutMe, setAboutMe] = useState([]);
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
    <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen  text-black p-6 border">
      <div className="shadow-xl rounded-2xl p-6 flex items-center w-3/4 mx-auto border border-white">
        <div className="w-24 h-24 rounded-full border-4 border-yellow-200  flex items-center justify-center">
         <img>
         </img>
        </div>

        <div className="ml-6">
          <h1 className="text-3xl font-bold">{userData.name}</h1>
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

     
      <div 
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
          <div className="text-black border-1 border-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center space-x-5">
          <h2 className="text-xl font-semibold text-yellow-200">Showcased Work</h2>
          <button 
          className="text-xl font-semibold border-2 border-pink-500 bg-pink-500 rounded-lg px-2 hover: cursor-pointer"
          onClick={() => setIsModalOpen(true)}>
            
            Add more +
            
          </button>
          </div>

          <div className="mt-2 grid grid-cols-2 gap-4">
    
          {/* Loading & Error Handling */}
          {loading && <p className="text-gray-400">Loading posts...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {console.log(localPosts)}
          {/* Post Cards */}
          {localPosts.length > 0 ? (
            localPosts.map((post, index) => <PostCard key={index} post={post} />)
          ) : (
            <p className="text-gray-500">No posts yet. Be the first to share!</p>
          )}
    
          {/* Post Creation Modal */}
          <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onPost={handleNewPost} />
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
      </div>
    </motion.div>
  );
}

export default UserProfile;

