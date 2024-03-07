import React from "react";
import ExamPerformanceTable from "./ExamPerformanceTable";
import ExamPerformanceGraph from "./ExamPerformanceGraph";

function Exam() {
  return (
    <div>
      <ExamPerformanceTable />
      <div className="h-96 shadows light-border py-10 text-colors bg-stone-200  my-10 ">
        <ExamPerformanceGraph />
        <div className="flex items-center justify-center text-stone-900 space-x-8">
          <div className="flex gap-2">
            <h1>Mean:</h1>
            <h2>80</h2>
          </div>
          <div className="flex gap-2">
            <h1>Range:</h1>
            <h2>80</h2>
          </div>
          <div className="flex gap-2">
            <h1>Median:</h1>
            <h2>80</h2>
          </div>
          <div className="flex gap-2">
            <h1>Standard Deviation:</h1>
            <h2>80</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exam;
