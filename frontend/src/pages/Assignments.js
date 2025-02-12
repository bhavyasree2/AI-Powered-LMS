import React, { useState } from 'react';
import Card from '../components/ui/card';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import Button from '../components/ui/button'; // Import Button

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    { course: 'Mathematics', status: 'Pending', dueDate: '2024-03-01', file: null },
    { course: 'Physics', status: 'Submitted', dueDate: '2024-03-05', file: 'physics_assignment.pdf' },
    { course: 'Chemistry', status: 'Graded', dueDate: '2024-03-10', file: 'chemistry_report.pdf' },
  ]);

  const handleUpload = (index, file) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].file = file.name;
    updatedAssignments[index].status = 'Submitted'; // Update status to 'Submitted'
    setAssignments(updatedAssignments);

    alert(`File "${file.name}" uploaded for ${assignments[index].course}!`);
  };

  const handleView = (file) => {
    if (file) {
      alert(`Viewing file: ${file}`);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Assignments</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => (
            <Card key={index} className="p-6 bg-white/80">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {assignment.course}
                </h3>
                <p className="text-gray-600 mb-2">Due: {assignment.dueDate}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      assignment.status === 'Submitted'
                        ? 'bg-green-100 text-green-800'
                        : assignment.status === 'Graded'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {assignment.status}
                  </span>
                </div>
                {assignment.status === 'Pending' ? (
                  <div className="mt-2">
                    <input
                      type="file"
                      id={`file-upload-${index}`}
                      className="hidden"
                      onChange={(e) => handleUpload(index, e.target.files[0])}
                    />
                    <label
                      htmlFor={`file-upload-${index}`}
                      className="cursor-pointer inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Upload Assignment
                    </label>
                    {assignment.file && <p className="text-gray-600 mt-1">{assignment.file}</p>}
                  </div>
                ) : (
                  <Button onClick={() => handleView(assignment.file)} className="mt-2">
                    View Assignment
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

export default Assignments;
