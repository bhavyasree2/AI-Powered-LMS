import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaBook, FaRocket, FaFlask, FaSeedling, FaLaptopCode } from 'react-icons/fa';
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

const Dashboard = () => {
    const [studentProgress] = useState([     { course: 'Mathematics', progress: 80 },
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

export default Dashboard;