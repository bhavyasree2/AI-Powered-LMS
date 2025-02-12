import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import Button from '../components/ui/button';

const Tests = () => {
  const navigate = useNavigate();
  const [tests, setTests] = useState(() => {
    const storedTests = JSON.parse(localStorage.getItem('availableTests')) || [
      { course: 'Mathematics', title: 'Math Test 1', date: '2024-03-15' },
      { course: 'Physics', title: 'Physics Midterm', date: '2024-03-20' },
      { course: 'Chemistry', title: 'Chemistry Quiz', date: '2024-03-25' },
    ];
    return storedTests;
  });

  useEffect(() => {
    localStorage.setItem('availableTests', JSON.stringify(tests));
  }, [tests]);

  const handleStartTest = (test) => {
    navigate(`/test/${test.title}`);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Tests</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {test.title}
                </h3>
                <p className="text-gray-600 mb-2">Course: {test.course}</p>
                <p className="text-gray-600 mb-2">Date: {test.date}</p>
                <Button onClick={() => handleStartTest(test)}>Start Test</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tests;
