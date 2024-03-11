import React from "react";

function SubjectCard({ subjectName, averageMark, bestStudent }) {
  return (
    <div className="bg-white rounded-lg shadows px-4 py-5 flex flex-col items-center space-y-2 w-72 my-4 ">
      <h3 className="text-xl font-bold text-gray-800">{subjectName}</h3>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Average Mark:</span>
        <span className="text-lg font-bold text-blue-500">{averageMark}</span>
      </div>
      <div className="text-sm text-gray-500">Best Student:</div>
      <div className="flex items-center space-x-2">
        <span className="font-medium text-gray-700">{bestStudent.name}</span>
        <span className="text-green-500 font-bold">{bestStudent.grade}</span>
      </div>
    </div>
  );
}

export default SubjectCard;
