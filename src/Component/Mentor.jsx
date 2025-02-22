import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, name: "Dance", icon: "💃", bgColor: "bg-rose-50", textColor: "text-rose-600" },
  { id: 2, name: "Music", icon: "🎵", bgColor: "bg-emerald-50", textColor: "text-emerald-600" },
  { id: 3, name: "Film", icon: "🎬", bgColor: "bg-violet-50", textColor: "text-violet-600" }
];

const mentors = [
  { id: 1, name: "Dance Mentor", role: "Professional Choreographer", expertise: "Contemporary Dance", image: "./danceMentor.jpg", rating: 4.9, reviews: 150 },
  { id: 2, name: "Music Mentor", role: "Professional Composer", expertise: "Classical Music", image: "./musicMentor.jpeg", rating: 4.8, reviews: 120 }
];

const Mentor = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center py-16 space-y-6">
        <h1 className="text-white text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Instant Access to Success</h1>
        <p className="text-lg text-White-600 max-w-3xl mx-auto">Why figure it out alone when you can learn from someone who's already nailed it?</p>
      </motion.section>

      {/* Categories */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="my-16">
        <h2 className="text-2xl font-bold mb-8">Browse by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div key={category.id} whileHover={{ scale: 1.03 }} className={`${category.bgColor} rounded-2xl p-6 cursor-pointer`}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className={`${category.textColor} font-semibold text-lg`}>{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Mentors List */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="my-16">
        <h2 className="text-2xl font-bold mb-8">Premium Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <motion.div key={mentor.id} whileHover={{ y: -8 }} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={mentor.image} alt={mentor.name} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="text-blue-700 font-semibold text-lg">{mentor.name}</h3>
                <p className="text-gray-600">{mentor.role}</p>
                <p className="text-gray-800 font-medium">{mentor.expertise}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-yellow-400">⭐</span> {mentor.rating} ({mentor.reviews} reviews)
                </div>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
                  onClick={() => navigate(`/mentor/${mentor.id}`)}> Book Session </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Mentor;
