import React from "react";
import ExamPerformanceTable from "./ExamPerformanceTable";
import ExamPerformanceGraph from "./ExamPerformanceGraph";
import Subject from "./Subject";

function Exam() {
  return (
    <div>
      <h1 className="text-center font-semibold text-colors text-3xl my-4 tracking-widest">
        Exams List
      </h1>
      <ExamPerformanceTable />
      <h1 className="text-center font-semibold text-colors text-3xl my-4 tracking-widest">
        Graphical Analysis
      </h1>
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
      <div className="">
        <Subject subject="Mathematics" />
        <Subject subject="English" />
        <Subject subject="Shona" />
        <Subject subject="Science" />
        <Subject subject="Agriculture" />
        <Subject subject="Food" />
        <Subject subject="Information Technology" />
      </div>
    </div>
  );
}

export default Exam;
