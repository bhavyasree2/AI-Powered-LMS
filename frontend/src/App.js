import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaUserCircle, FaBook, FaRocket, FaFlask, FaSeedling, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from './components/ui/button';
import Card from './components/ui/card';
import AnimatedBackground from './components/ui/AnimatedBackground';

// Course Data and Icons
const courses = [
  {
    name: 'Mathematics',
    description: 'This course covers fundamental mathematical concepts and problem-solving techniques.',
    icon: <FaBook className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'Physics',
    description: 'Learn the basics of physics, including mechanics, thermodynamics, and electromagnetism.',
    icon: <FaRocket className="w-12 h-12 text-red-500" />
  },
  {
    name: 'Chemistry',
    description: 'A comprehensive course on chemistry, including organic and inorganic chemistry.',
    icon: <FaFlask className="w-12 h-12 text-green-500" />
  },
  {
    name: 'Biology',
    description: 'Explore the world of biology, covering cellular biology, genetics, and ecology.',
    icon: <FaSeedling className="w-12 h-12 text-emerald-600" />
  },
  {
    name: 'Computer Science',
    description: 'Dive into computer science, learning programming, algorithms, and data structures.',
    icon: <FaLaptopCode className="w-12 h-12 text-purple-600" />
  }
];


const Dashboard = () => {
  const [studentProgress] = useState([
    { course: 'Mathematics', progress: 80 },
    { course: 'Physics', progress: 70 },
    { course: 'Chemistry', progress: 90 },
  ]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <h1 className="text-4xl font-bold mb-8 text-gray-800 relative z-10">
        📊 Learning Progress
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {studentProgress.map((item, index) => (
          <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4">
                <CircularProgressbar
                  value={item.progress}
                  text={`${item.progress}%`}
                  styles={buildStyles({
                    pathColor: item.progress > 75 ? '#4F46E5' : '#F59E0B',
                    textColor: '#1F2937',
                    trailColor: '#E5E7EB',
                    textSize: '24px'
                  })}
                />
              </div>
              <div className="flex items-center gap-3">
                {courses.find(c => c.name === item.course)?.icon}
                <h3 className="text-2xl font-bold text-gray-800">{item.course}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Home = () => (
  <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
    <AnimatedBackground />
    <div className="relative z-10">
      <header className="text-center mb-12">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-bold mb-6 text-gray-800"
        >
          🚀 Welcome to Edvance
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
         AI-Powered Learning Management System.Master new skills with our interactive courses and hands-on projects. 
          Start your learning journey today!
        </p>
      </header>

      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {course.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600">{course.description}</p>
                <Button className="mt-6">Explore Course</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleOptCourse = (courseName) => {
    setEnrolledCourses([...enrolledCourses, courseName]);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Available Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {!enrolledCourses.includes(course.name) ? (
                  <Button onClick={() => handleOptCourse(course.name)}>
                    Enroll Now
                  </Button>
                ) : (
                  <div className="w-full">
                    <div className="h-2 bg-gray-200 rounded-full mb-4">
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{ width: '50%' }}
                      ></div>
                    </div>
                    <p className="text-gray-600">Course Progress: 50%</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Assignments = () => {
  const [assignments] = useState([
    { course: 'Mathematics', status: 'Pending', dueDate: '2024-03-01' },
    { course: 'Physics', status: 'Submitted', dueDate: '2024-03-05' },
    { course: 'Chemistry', status: 'Graded', dueDate: '2024-03-10' }
  ]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Assignments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => (
            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {assignment.course}
                </h3>
                <p className="text-gray-600 mb-2">Due: {assignment.dueDate}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                    assignment.status === 'Graded' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {assignment.status}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tests = () => {
  const [tests] = useState([
    { course: 'Mathematics', score: 'A', date: '2024-02-15' },
    { course: 'Physics', score: 'B+', date: '2024-02-20' },
    { course: 'Chemistry', score: 'A-', date: '2024-02-25' }
  ]);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Test Results</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {test.course}
                </h3>
                <p className="text-gray-600 mb-2">Date: {test.date}</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-blue-600">
                    {test.score}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfilePage = ({ onLogout }) => {
  const navigate = useNavigate();
  const [profile] = useState({
    name: 'John Doe',
    email: 'john@futurelearn.com',
    joined: '2024-01-01'
  });

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Profile</h1>
        <Card className="p-6 bg-white/90 backdrop-blur-sm max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaUserCircle className="w-16 h-16 text-gray-700" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-600">Member since: {profile.joined}</p>
              <Button onClick={() => {
                onLogout();
                navigate('/');
              }} className="mt-6 w-full">
                Logout
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    navigate('/dashboard');
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative flex items-center justify-center">
      <AnimatedBackground />
      <Card className="p-8 bg-white/90 backdrop-blur-sm w-full max-w-md relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800"
        >
          {isRegistering ? 'Create Account' : 'Welcome Back'}
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required 
              />
            </div>
          )}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required 
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required 
            />
          </div>
          <Button type="submit" className="w-full">
            {isRegistering ? 'Register' : 'Login'}
          </Button>
        </form>
        <p className="text-center mt-6 text-gray-600">
          {isRegistering ? 'Already have an account? ' : 'Need an account? '}
          <button 
            type="button"
            className="text-blue-600 hover:underline"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? 'Login here' : 'Register now'}
          </button>
        </p>
      </Card>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/profile" element={<ProfilePage onLogout={() => setIsLoggedIn(false)} />} />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        </Routes>
      </div>
    </Router>
  );
};

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

export default App;