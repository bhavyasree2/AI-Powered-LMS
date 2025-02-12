import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';

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

const CoursePage = () => {
  const { courseName } = useParams();
  const course = courseContent[courseName];

  const [progress, setProgress] = useState({});
  const [totalTopics, setTotalTopics] = useState(0);

  useEffect(() => {
    if (course) {
      setTotalTopics(course.topics.length);
      const storedProgress = JSON.parse(localStorage.getItem(`progress_${courseName}`)) || {};
      setProgress(storedProgress);
    }
  }, [course, courseName]);

  const handleTopicClick = (topicName) => {
    const updatedProgress = { ...progress };
    updatedProgress[topicName] = !updatedProgress[topicName];
    setProgress(updatedProgress);
    localStorage.setItem(`progress_${courseName}`, JSON.stringify(updatedProgress));
  };

  const calculateOverallProgress = () => {
    const completedTopics = Object.keys(progress).filter(topic => progress[topic]).length;
    return totalTopics === 0 ? 0 : Math.round((completedTopics / totalTopics) * 100);
  };

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10 w-full">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">{course.title}</h1>

        <div className="mb-4">
          Overall Progress: {calculateOverallProgress()}%
        </div>

        {course.topics.map((topic, index) => (
          <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm mb-4">
            <div className="flex flex-col">
              <h2
                className="text-2xl font-bold text-gray-800 mb-2 cursor-pointer hover:underline"
                onClick={() => handleTopicClick(topic.name)}
              >
                {topic.name}
              </h2>
              <p className="text-gray-600">
                {progress[topic.name] ? <span>&#10004; </span> : null}
                {topic.content}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;