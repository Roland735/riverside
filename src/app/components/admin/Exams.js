import React from "react";
import Exam from "../teacher/exams/Exam";
import SubjectCard from "./SubjectCard";

function Exams() {
  const subjectData = [
    {
      subjectName: "Mathematics",
      averageMark: 78.5,
      bestStudent: {
        name: "Alice Johnson",
        grade: "A+",
      },
    },
    {
      subjectName: "English Literature",
      averageMark: 82.1,
      bestStudent: {
        name: "David Miller",
        grade: "A",
      },
    },
    {
      subjectName: "History",
      averageMark: 75.2,
      bestStudent: {
        name: "Emily Williams",
        grade: "B+",
      },
    },
    {
      subjectName: "History",
      averageMark: 75.2,
      bestStudent: {
        name: "Emily Williams",
        grade: "B+",
      },
    },
    {
      subjectName: "History",
      averageMark: 75.2,
      bestStudent: {
        name: "Emily Williams",
        grade: "B+",
      },
    },
    {
      subjectName: "History",
      averageMark: 75.2,
      bestStudent: {
        name: "Emily Williams",
        grade: "B+",
      },
    },
  ];

  return (
    <div className="flex justify-between items-center flex-wrap colors px-5 light-border    ">
      {/* Map through subjectData and render SubjectCard components */}
      {subjectData.map((subject) => (
        <SubjectCard
          key={subject.subjectName} // Use a unique key for each card
          subjectName={subject.subjectName} // Pass subject details as props
          averageMark={subject.averageMark}
          bestStudent={subject.bestStudent}
        />
      ))}
    </div>
  );
}

export default Exams;
