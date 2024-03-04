import React from "react";
import AttendanceCard from "./AttendanceCard";
import AverageTestCard from "./AverageTestCard";
import AssignmentAverage from "./AssignmentAverage";
import Demerits from "./Demerits";

function Reports() {
  return (
    <div className="dark:bg-sky-950 shadows px-10 py-4 flex justify-between flex-wrap transition-opacity duration-1000">
      <AttendanceCard />
      <AverageTestCard />
      <AssignmentAverage />
      <Demerits />
    </div>
  );
}

export default Reports;
