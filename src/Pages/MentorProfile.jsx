import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../Component/Layout';

const mentorData = {
  name: " Sneha Dance Mentor",
  image: "./danceMentor.jpg",
  badges: ["Expert Dance Guidance", "Mentor Approved"],
  description: [
    "Personalized Dance Mentorship",
    "Elevate Your Technique & Style",
    "Expert Guidance on Choreography",
    "Performance Coaching & Feedback",
    "Connect with Top Dance Mentors",
    "Inspiring the Next Generation of Dancers"
  ],
  services: [
    {
      title: "One-on-One Dance Mentorship",
      responseTime: "Replies in 24 hours",
      priority: "Priority DM",
      price: "₹0",
    },
    {
      title: "Choreography & Technique Review",
      responseTime: "Replies in 24 hours",
      priority: "Priority DM",
      price: "₹0",
      rating: 5,
    }
  ],
  bookings: [
    {
      title: "Transform Your Dance",
      tag: "Popular",
      options: [
        {
          duration: "30 mins",
          type: "Live Dance Coaching",
          oldPrice: "₹2,500",
          newPrice: "₹199"
        },
        {
          title: "Choreography & Technique Session",
          description: "Get tailored feedback on your routine and improve your dance technique.",
          duration: "30 mins",
          type: "Video Consultation",
          oldPrice: "₹1,500",
          newPrice: "₹999",
          rating: 5
        }
      ]
    }
  ]
};

const MentorProfile = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Info */}
          <motion.div className="lg:col-span-4 bg-[#8B4513] rounded-3xl p-8 text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <div className="space-y-6">
              <img src={mentorData.image} alt="Profile" className="w-40 h-40 rounded-full mx-auto border-4 border-white/20" />
              <div className="flex gap-3 justify-center">
                {mentorData.badges.map((badge, index) => (
                  <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm">{badge}</span>
                ))}
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">{mentorData.name}</h1>
                <div className="space-y-1 text-white/80 text-sm">
                  {mentorData.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {mentorData.services.map((service, index) => (
              <motion.div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}>
                {service.rating && <div className="flex items-center gap-2 mb-4"><span className="text-yellow-400">★</span><span className='text-blue-800'>{service.rating}</span></div>}
                <h2 className="text-blue-800 text-2xl font-semibold mb-4">{service.title}</h2>
                <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
                  <div>
                    <span className="text-gray-600">{service.responseTime}</span>
                    <p className="text-sm text-gray-500">{service.priority}</p>
                  </div>
                  <button className="px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50">{service.price} →</button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Booking Options */}
          <motion.div className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            {mentorData.bookings.map((booking, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-blue-800 text-2xl font-semibold">{booking.title}</h2>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{booking.tag}</span>
                </div>
                {booking.options.map((option, idx) => (
                  <motion.div key={idx} className="bg-gray-50 rounded-2xl p-4 mb-4 hover:bg-blue-50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}>
                    <div className="flex justify-between items-center">
                      <div>
                        {option.title && <h3 className="text-blue-800 text-xl font-semibold mb-2">{option.title}</h3>}
                        {option.description && <p className="text-gray-600 mb-2">{option.description}</p>}
                        <p className="text-sm text-gray-500">{option.duration} • {option.type}</p>
                      </div>
                      <button className="px-4 py-2 rounded-full bg-white shadow hover:shadow-md">
                        <span className="line-through text-gray-400 text-sm mr-1">{option.oldPrice}</span>
                        <span>{option.newPrice} →</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default MentorProfile;
