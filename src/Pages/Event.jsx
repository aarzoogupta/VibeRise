import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireDB } from "../Firebase/FirebaseConfig";
import Layout from "../Component/Layout";
import { motion } from "framer-motion";
function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const snapshot = await getDocs(collection(fireDB, "events"));
      setEvents(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchEvents();
  }, []);

  return (
    <Layout>
     <div 
     className="p-6 min-h-screen  text-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">🎭 Upcoming Events</h2>
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No events available.</p>
        ) : (
          events.map(event => (
            <motion.div key={event.id} 
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-white shadow-lg rounded-lg p-6 relative">
              {event.imageUrl && (
                <img src={event.imageUrl} alt={event.Name} className="w-full h-40 object-cover rounded-lg mb-4" />
              )}
              <h3 className="text-xl font-semibold text-blue-600">{event.Name}</h3>
              <p className="text-gray-500">{event.dateTime}</p>
              <p className="mt-2 font-medium"><strong>Venue:</strong> {event.venue}</p>
              <p className="text-gray-600"><strong>Address:</strong> {event.Address}</p>
              <p className="mt-2 font-medium"><strong>Organizer:</strong> {event.OrganizerName}</p>
              <p className="text-gray-600"><strong>Contact:</strong> {event.OrganizerContact}</p>
              <p className="mt-2 font-medium"><strong>Type:</strong> {event.type}</p>
              <p className="mt-2 font-medium">
                <strong>Entry:</strong> {event.isPaid === "Paid" ? `₹${event.Cost}` : "Free"}
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full">
                Apply Now
              </button>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
    </Layout>
  );
}

export default EventPage;

