import React from "react";
import Layout from "../Component/Layout";
import { motion } from "framer-motion";

const sponsors = [
  {
    name: "Coding Ninjas",
    amount: "₹50,000 - ₹3,00,000",
    category: "Education & Tech",
    email: "support@codingninjas.com",
  },
  {
    name: "GeeksforGeeks",
    amount: "₹30,000 - ₹2,00,000",
    category: "Tech & Learning",
    email: "support@geeksforgeeks.org",
  },
  {
    name: "Scaler",
    amount: "₹1,00,000 - ₹5,00,000",
    category: "EdTech & Career",
    email: "partnerships@scaler.com",
  },
  {
    name: "Microsoft",
    amount: "₹5,00,000 - ₹25,00,000",
    category: "AI, Cloud, & Tech",
    email: "msindiapartners@microsoft.com",
  },
  {
    name: "Dance India Academy",
    amount: "₹50,000 - ₹2,00,000",
    category: "Dance & Performing Arts",
    email: "contact@danceindia.com",
  },
  {
    name: "Music Mania",
    amount: "₹75,000 - ₹3,50,000",
    category: "Music & Entertainment",
    email: "info@musicmania.com",
  }
];

function Sponsorship() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 min-h-screen text-gray-900"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🚀 Sponsorship Opportunities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-blue-600">{sponsor.name}</h3>
              <p className="text-gray-500 mt-2 font-medium">Category: {sponsor.category}</p>
              <p className="text-gray-600 font-medium">Sponsorship Amount: {sponsor.amount}</p>
              <p className="text-gray-600 mt-2">📩 Email: <a href={`mailto:${sponsor.email}`} className="text-blue-500 underline">{sponsor.email}</a></p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
              >
                🤝 Connect
              </motion.button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Become a Sponsor
          </motion.button>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Sponsorship;

