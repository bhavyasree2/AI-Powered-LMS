import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import Button from '../components/ui/button';

const TestPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      question: "What is 2 + 2?",
      options: ["2", "4", "6", "8"],
      answer: "4"
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Paris", "Madrid", "Rome"],
      answer: "Paris"
    },
    // ... more questions
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [grade, setGrade] = useState(null);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem(`answers_${title}`)) || {};
    setAnswers(storedAnswers);
  }, [title]);

  const handleAnswerChange = (questionIndex, answer) => {
    const updatedAnswers = { ...answers };
    updatedAnswers[questionIndex] = answer;
    setAnswers(updatedAnswers);
    localStorage.setItem(`answers_${title}`, JSON.stringify(updatedAnswers));
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers++;
      }
    });
    const calculatedGrade = Math.round((correctAnswers / questions.length) * 100);
    setGrade(calculatedGrade);

    const storedGrades = JSON.parse(localStorage.getItem('grades')) || {};
    storedGrades[title] = calculatedGrade;
    localStorage.setItem('grades', JSON.stringify(storedGrades));

    localStorage.removeItem(`answers_${title}`);

    const storedAvailableTests = JSON.parse(localStorage.getItem('availableTests')) || [];
    const updatedAvailableTests = storedAvailableTests.filter(test => test.title !== title);
    localStorage.setItem('availableTests', JSON.stringify(updatedAvailableTests));

    navigate('/profile');
  };

  if (grade !== null) {
    return (
      <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10 bg-white/90 backdrop-blur-sm p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">Test: {title} - Graded!</h1>
          <p className="text-2xl text-green-600">Your Grade: {grade}%</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Test: {title}</h1>
        {questions.length > 0 && (
          <Card key={currentQuestion} className="p-6 bg-white/90 backdrop-blur-sm mb-4">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {questions[currentQuestion].question}
              </h3>
              {questions[currentQuestion].options.map((option, optionIndex) => (
                <label key={optionIndex} className="block text-gray-700 mb-2">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={(e) => handleAnswerChange(currentQuestion, e.target.value)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </Card>
        )}

        <div className="flex justify-between">
          {currentQuestion > 0 && (
            <Button onClick={handlePreviousQuestion}>Previous Question</Button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <Button onClick={handleNextQuestion}>Next Question</Button>
          ) : (
            <Button onClick={handleSubmit}>Submit Test</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;