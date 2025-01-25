import React, { useState } from "react";
import Card from "../components/ui/card"; // Adjust the relative path
import Button from "../components/ui/button";
import Progress from "../components/ui/progress";
import Input from "../components/ui/input";
import { motion } from "framer-motion";
import "../styles.css";

const Dashboard = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, name: "Math Homework", dueDate: "2025-01-30", status: "Pending" },
    { id: 2, name: "Science Project", dueDate: "2025-02-05", status: "Graded" },
  ]);

  const [performance, setPerformance] = useState({
    progress: 70,
    insights: "Consistent progress, focus more on Science-related topics."
  });

  const [personalizedPath, setPersonalizedPath] = useState([
    "Complete Algebra basics",
    "Review Newton's Laws",
    "Practice Python coding exercises",
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-blue-600">Welcome to the AI-Powered LMS</h1>
        <p className="text-gray-600 mt-2">Manage assignments, track progress, and follow personalized learning paths.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assignments Section */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Assignments</h2>
            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="p-3 border rounded-lg flex justify-between items-center bg-white shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <h3 className="font-medium">{assignment.name}</h3>
                    <p className="text-gray-500 text-sm">Due: {assignment.dueDate}</p>
                  </div>
                  <Button variant="outline">{assignment.status}</Button>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Input placeholder="Upload Assignment" />
              <Button className="mt-2 w-full">Upload</Button>
            </div>
          </div>
        </Card>

        {/* Performance Section */}
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Performance Analytics</h2>
            <div>
              <h3 className="font-medium mb-2">Overall Progress</h3>
              <Progress value={performance.progress} />
              <p className="mt-2 text-gray-500">{performance.insights}</p>
            </div>
          </div>
        </Card>

        {/* Personalized Learning Paths */}
        <Card className="col-span-1 md:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Personalized Learning Path</h2>
            <ul className="list-disc list-inside space-y-2">
              {personalizedPath.map((step, index) => (
                <li key={index} className="text-gray-700">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
