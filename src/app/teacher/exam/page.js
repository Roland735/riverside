import TeacherLayout from "@/app/components/Universal/TeacherLayout";
import Exam from "@/app/components/teacher/exams/Exam";
import ExamPerformanceGraph from "@/app/components/teacher/exams/ExamPerformanceGraph";
import ExamPerformanceTable from "@/app/components/teacher/exams/ExamPerformanceTable";
import React from "react";

function page() {
  return (
    <TeacherLayout>
      <Exam />
    </TeacherLayout>
  );
}

export default page;
