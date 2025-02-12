import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaRocket, FaFlask, FaSeedling, FaLaptopCode } from 'react-icons/fa';
import Button from '../components/ui/button';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const courses = [   {
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
              </div>
            </Card>
          ))}
        </div>
      </section>

    </div>
  </div>
);

export default Home;