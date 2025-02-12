import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBook, FaRocket, FaFlask, FaSeedling, FaLaptopCode } from 'react-icons/fa';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

const ProfilePage = ({ onLogout }) => {
  const navigate = useNavigate();
  const [profile] = useState({
    name: 'John Doe',
    email: 'john@futurelearn.com',
    joined: '2024-01-01'
  });
  const [studentProgress] = useState([
    { course: 'Mathematics', progress: 80 },
    { course: 'Physics', progress: 70 },
    { course: 'Chemistry', progress: 90 },
    { course: 'Biology', progress: 60 },
    { course: 'Computer Science', progress: 85 },
  ]);
  const [assignments] = useState([
    { course: 'Mathematics', status: 'Pending', dueDate: '2024-03-01' },
    { course: 'Physics', status: 'Submitted', dueDate: '2024-03-05' },
    { course: 'Chemistry', status: 'Graded', dueDate: '2024-03-10' },
    { course: 'Biology', status: 'Pending', dueDate: '2024-03-15' },
    { course: 'Computer Science', status: 'Submitted', dueDate: '2024-03-20' },
  ]);
  const [completedTests, setCompletedTests] = useState([]);

  useEffect(() => {
    const storedGrades = JSON.parse(localStorage.getItem('grades')) || {};
    setCompletedTests(Object.keys(storedGrades));
  }, []);

  const submittedAssignments = assignments.filter(assignment => assignment.status === 'Submitted');

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Profile</h1>
        <div className="max-w-[80%] mx-auto">
          <Card className="p-6 bg-white/90 backdrop-blur-sm w-full">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaUserCircle className="w-16 h-16 text-gray-700" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                  <p className="text-gray-600">{profile.email}</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Learning Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {studentProgress.map((item, index) => (
                    <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 mb-2">
                          <CircularProgressbar
                            value={item.progress}
                            text={`${item.progress}%`}
                            styles={buildStyles({})} // Add your styles here if needed
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          {courses.find(c => c.name === item.course)?.icon}
                          <h3 className="text-xl font-bold text-gray-800">{item.course}</h3>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Assignments</h2>
                {submittedAssignments.length === 0 ? (
                  <p className="text-gray-600">No submitted assignments yet.</p>
                ) : (
                  submittedAssignments.map((assignment, index) => (
                    <Card key={index} className="p-4 mb-2 bg-white/80 backdrop-blur-sm">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{assignment.course}</h3>
                        <p className="text-gray-600 mb-1">Due: {assignment.dueDate}</p>
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                          assignment.status === 'Graded' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {assignment.status}
                        </span>
                      </div>
                    </Card>
                  ))
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Test Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Grid for test results */}
                  {completedTests.map((testTitle) => {
                    const storedGrades = JSON.parse(localStorage.getItem('grades')) || {};
                    const grade = storedGrades[testTitle];
                    return (
                      <Card key={testTitle} className="p-4 mb-2 bg-white/80 backdrop-blur-sm">
                        <div className="flex flex-col">
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{testTitle}</h3>
                          <span className="text-2xl font-bold text-blue-600">{grade}%</span>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>


              <div className="border-t pt-6">
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
    </div>
  );
};

export default ProfilePage;