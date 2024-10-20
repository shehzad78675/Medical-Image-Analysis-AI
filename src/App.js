// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Chatbot from './components/Chatbot';
import Home from './components/Home'; // Import the Home component

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Ensure padding to avoid content being hidden under the navbar */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Use Home component for the root path */}
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
