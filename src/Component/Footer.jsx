import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#42275a]-900 text-white py-6 border-t border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} VibeRise. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-yellow-400 transition duration-300">Privacy</a>
          <a href="/terms" className="hover:text-yellow-400 transition duration-300">Terms</a>
          <a href="/support" className="hover:text-yellow-400 transition duration-300">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
