import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaUserCircle } from 'react-icons/fa';

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
  >
    {children}
  </button>
);

const Input = ({ type, placeholder, className, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);
const courses = [
  {
    name: 'Mathematics',
    description: 'This course covers fundamental mathematical concepts and problem-solving techniques.',
  },
  {
    name: 'Physics',
    description: 'Learn the basics of physics, including mechanics, thermodynamics, and electromagnetism.',
  },
  {
    name: 'Chemistry',
    description: 'A comprehensive course on chemistry, including organic and inorganic chemistry.',
  },
  {
    name: 'Biology',
    description: 'Explore the world of biology, covering cellular biology, genetics, and ecology.',
  },
  {
    name: 'Computer Science',
    description: 'Dive into computer science, learning programming, algorithms, and data structures.',
  },
];

const Dashboard = () => {
  const [studentProgress, setStudentProgress] = useState([
    { course: 'Mathematics', progress: 80 },
    { course: 'Physics', progress: 70 },
    { course: 'Chemistry', progress: 90 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Student Progress Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {studentProgress.map((item, index) => (
          <Card key={index} className="p-4">
            <CardContent className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <CircularProgressbar
                  value={item.progress}
                  text={`${item.course}`}
                  styles={buildStyles({
                    textSize: '10px',
                    pathColor: item.progress > 75 ? '#4CAF50' : '#FFEB3B',
                    textColor: '#333',
                    trailColor: '#d6d6d6',
                  })}
                />
              </div>
              <p className="text-lg font-semibold">{item.progress}% Completed</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Learning Platform</h1>
      <p className="mb-4">Our platform offers a wide range of courses to help you succeed in your academic journey. Explore available courses and enhance your knowledge.</p>
      <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p>{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Courses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleOptCourse = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Courses Available</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <p>{course.description}</p>
              {!enrolledCourses.includes(course.name) ? (
                <Button className="mt-2" onClick={() => handleOptCourse(course.name)}>
                  Opt for Course
                </Button>
              ) : (
                <>
                  <p className="mt-2">Progress: 50%</p> {/* Replace with actual progress */}
                  <div className="mt-4">
                    <h3>Course Videos</h3>
                    <ul>
                      <li>Video 1: Introduction</li>
                      <li>Video 2: Advanced Concepts</li>
                    </ul>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


const ProfilePage = ({ onLogout }) => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    courses: [
      { course: 'Mathematics', progress: 80, assignmentSubmitted: true, testGrade: 'A' },
      { course: 'Physics', progress: 70, assignmentSubmitted: false, testGrade: 'B+' },
      { course: 'Chemistry', progress: 90, assignmentSubmitted: true, testGrade: 'A+' },
    ],
  });

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Profile</h1>
      <div className="mb-4">
        <p><strong>Name:</strong> {profileData.name}</p>
        <p><strong>Email:</strong> {profileData.email}</p>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold">Courses In Progress:</h2>
        {profileData.courses.map((course, index) => (
          <Card key={index} className="p-4 mb-4">
            <CardContent>
              <h3 className="text-lg font-semibold">{course.course}</h3>
              <div className="w-full bg-gray-200 h-2 mb-4">
                <div
                  className="bg-blue-500 h-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p><strong>Progress:</strong> {course.progress}%</p>
              <p><strong>Assignment Submitted:</strong> {course.assignmentSubmitted ? 'Yes' : 'No'}</p>
              <p><strong>Test Grade:</strong> {course.testGrade}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button onClick={handleLogout} className="mt-4">Logout</Button>
    </div>
  );
};

const AssignmentPage = () => {
  const [assignmentStatus, setAssignmentStatus] = useState([
    { course: 'Mathematics', assignmentSubmitted: false },
    { course: 'Physics', assignmentSubmitted: false },
    { course: 'Chemistry', assignmentSubmitted: false },
  ]);

  const handleUploadAssignment = (index) => {
    // Simulating assignment upload
    const newAssignmentStatus = [...assignmentStatus];
    newAssignmentStatus[index].assignmentSubmitted = true;
    setAssignmentStatus(newAssignmentStatus);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Assignments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignmentStatus.map((item, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h2 className="text-lg font-semibold">{item.course}</h2>
              {!item.assignmentSubmitted ? (
                <Button onClick={() => handleUploadAssignment(index)} className="mt-2">Upload Assignment</Button>
              ) : (
                <p className="text-green-600 mt-2">Assignment Submitted</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};


const TestPage = () => {
  const [testStatus, setTestStatus] = useState([
    { course: 'Mathematics', testTaken: false, grade: '' },
    { course: 'Physics', testTaken: false, grade: '' },
    { course: 'Chemistry', testTaken: false, grade: '' },
  ]);

  const handleTakeTest = (index) => {
    // Simulating taking a test and receiving a grade
    const newTestStatus = [...testStatus];
    newTestStatus[index].testTaken = true;
    newTestStatus[index].grade = 'A'; // Replace with actual test logic
    setTestStatus(newTestStatus);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Tests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testStatus.map((item, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h2 className="text-lg font-semibold">{item.course}</h2>
              {!item.testTaken ? (
                <Button onClick={() => handleTakeTest(index)} className="mt-2">Take Test</Button>
              ) : (
                <p className="text-green-600 mt-2">Grade: {item.grade}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const LoginPage = ({ onLogin }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    onLogin('John Doe');
    navigate('/dashboard');
  };

  if (isLoggedIn) return <Navigate to="/dashboard" replace />;

  return (
    <div className="p-6 flex justify-center items-center h-screen">
      <Card className="p-6 w-full max-w-md">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Login</h1>
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="password" placeholder="Password" className="mb-4" />
          <Button onClick={handleLogin} className="w-full">Login</Button>
          <p className="mt-4 text-center text-sm">
            Don't have an account? <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/login');
  };

  return (
    <div className="p-6 flex justify-center items-center h-screen">
      <Card className="p-6 w-full max-w-md">
        <CardContent>
          <h1 className="text-xl font-bold mb-4">Register</h1>
          <Input type="text" placeholder="Full Name" className="mb-4" />
          <Input type="email" placeholder="Email" className="mb-4" />
          <Input type="password" placeholder="Password" className="mb-4" />
          <Button onClick={handleRegister} className="w-full">Register</Button>
          <p className="mt-4 text-center text-sm">
            Already have an account? <Link to="/login" className="text-blue-500">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setUserName(name);
    setIsLoggedIn(true);
    
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <Router>
      <div className="container mx-auto p-6">
        <nav className="flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-6">
          <Link to="/" className="text-white font-semibold text-lg">Home</Link>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                
                <Link to="/courses" className="text-white">Courses</Link>
                <Link to="/test" className="text-white">Tests</Link>
                <Link to="/assignments" className="text-white">Assignments</Link>
                <Link to="/profile" className="text-white flex items-center space-x-2">
                  <FaUserCircle size={24} className="text-white" />
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white">Login/Register</Link>
              </>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage onLogout={handleLogout} />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/test" element={<TestPage />} /> 
          <Route path="/assignments" element={<AssignmentPage />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
