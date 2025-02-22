import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Find Artists",
    description:
      "Discover your perfect artist to collaborate with and elevate your brand. Whether you need a brand ambassador or a talented artist, connect with the right talent.",
    image: "/hp1.jpeg",
  },
  {
    title: "Organize Events",
    description:
      "Host and manage your own sports events with our platform. From registration to promotion, streamline every aspect of your event organization.",
    image: "/hp2.jpg",
  },
  {
    title: "Collaborate and Grow",
    description:
      "Take your creative career to new heights by leveraging sponsorships and partnerships. Connect with brands that align with your values.",
    image: "/h3.jpeg",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:bg-blue shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4">
                <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-600">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;