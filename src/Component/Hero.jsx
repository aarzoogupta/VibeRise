import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 ">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            VibeRise
            <br />
            <span className="text-white-600">
              Empowering New Talent through Sponsorships, Events, and Collaboration
            </span>
          </h1>
          <motion.button
            className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;