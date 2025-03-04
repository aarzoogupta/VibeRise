import React from "react";

function Footer() {
  return (
    <footer className="text-white py-4 w-full text-center border border-white-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} VibeRise. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a href="/privacy" className="hover:text-yellow-400 transition">Privacy</a>
          <a href="/terms" className="hover:text-yellow-400 transition">Terms</a>
          <a href="/support" className="hover:text-yellow-400 transition">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
