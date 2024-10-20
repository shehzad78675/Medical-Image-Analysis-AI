// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 fixed top-0 left-0 right-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-white mx-2">
          <h1 className="text-white text-lg font-bold">
            Medical Image Analysis AI
          </h1>
        </Link>
        k
        <div>
          <Link to="/" className="text-white mx-2">
            Home
          </Link>
          <Link to="/about" className="text-white mx-2">
            About
          </Link>
          <Link to="/chatbot" className="text-white mx-2">
            Chatbot
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
