import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Tests from './pages/Tests';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import TestPage from './pages/TestPage';
import CoursePage from './pages/CoursePage';
import './styles.css'; // Import your CSS file

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const NavLink = ({ to, icon, label }) => (
    <motion.div whileHover={{ scale: 1.05 }}>
      <Link
        to={to}
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
      >
        <span className="text-xl">{icon}</span>
        {label && <span className="font-medium">{label}</span>}
      </Link>
    </motion.div>
  );
  return (
    <Router>
      <div className="container mx-auto p-6">
        <motion.nav
          className="flex justify-between items-center bg-white/80 backdrop-blur-md p-4 rounded-2xl mb-8 shadow-lg sticky top-4 z-50"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Edvance
          </Link>
          <div className="flex items-center gap-8">
            {isLoggedIn ? (
              <>
                <NavLink to="/courses" icon="📚" label="Courses" />
                <NavLink to="/assignments" icon="📝" label="Assignments" />
                <NavLink to="/tests" icon="📊" label="Tests" />
                <NavLink to="/profile" icon={<FaUserCircle className="text-2xl text-gray-700" />} />
              </>
            ) : (
              <NavLink to="/login" icon="🔑" label="Get Started" />
            )}
          </div>
        </motion.nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseName" element={<CoursePage />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/test/:title" element={<TestPage />} />
          <Route path="/profile" element={<ProfilePage onLogout={() => setIsLoggedIn(false)} />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;