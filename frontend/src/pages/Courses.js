import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaRocket, FaFlask, FaSeedling, FaLaptopCode } from 'react-icons/fa';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';

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
const courseContent = {
  Mathematics: {
    title: 'Mathematics Fundamentals',
    topics: [
      { name: 'Algebra', content: 'Content for Algebra goes here...' },
      { name: 'Calculus', content: 'Content for Calculus goes here...' },
      { name: 'Geometry', content: 'Content for Geometry goes here...' },
    ],
  },
  Physics: {
    title: 'Introduction to Physics',
    topics: [
      { name: 'Mechanics', content: 'Content for Mechanics goes here...' },
      { name: 'Thermodynamics', content: 'Content for Thermodynamics goes here...' },
    ],
  },
  Chemistry: {
    title: 'General Chemistry',
    topics: [
      { name: 'Atomic Structure', content: 'Content for Atomic Structure...' },
      { name: 'Chemical Bonding', content: 'Content for Chemical Bonding...' },
      { name: 'Stoichiometry', content: 'Content for Stoichiometry...' },
    ],
  },
  Biology: {
    title: 'Basic Biology',
    topics: [
      { name: 'Cell Biology', content: 'Content for Cell Biology...' },
      { name: 'Genetics', content: 'Content for Genetics...' },
      { name: 'Ecology', content: 'Content for Ecology...' },
    ],
  },
  'Computer Science': {
    title: 'Introduction to Computer Science',
    topics: [
      { name: 'Programming Basics', content: 'Content for Programming Basics...' },
      { name: 'Algorithms', content: 'Content for Algorithms...' },
      { name: 'Data Structures', content: 'Content for Data Structures...' },
    ],
  },
};
const Courses = () => {
  const navigate = useNavigate();
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const storedEnrolledCourses = localStorage.getItem('enrolledCourses');
    return storedEnrolledCourses ? JSON.parse(storedEnrolledCourses) : [];
  });

  const handleOptCourse = (courseName) => {
    const updatedEnrolledCourses = [...enrolledCourses, courseName];
    setEnrolledCourses(updatedEnrolledCourses);
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedEnrolledCourses));
    navigate(`/courses/${courseName}`);
  };

  const calculateCourseProgress = (courseName) => {
    const storedProgress = JSON.parse(localStorage.getItem(`progress_${courseName}`)) || {};
    const totalTopics = courseContent[courseName]?.topics?.length || 0;
    const completedTopics = Object.keys(storedProgress).filter(topic => storedProgress[topic]).length;
    return totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
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

                {enrolledCourses.includes(course.name) ? (
                  <div className="w-full">
                    <div className="h-2 bg-gray-200 rounded-full mb-4">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${calculateCourseProgress(course.name)}%` }}
                      ></div>
                    </div>
                    <p className="text-gray-600">
                      Course Progress: {calculateCourseProgress(course.name)}%
                    </p>
                  </div>
                ) : (
                  <Button onClick={() => handleOptCourse(course.name)}>
                    Enroll Now
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
