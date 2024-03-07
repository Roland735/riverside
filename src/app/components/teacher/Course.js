import React from "react";
import AssignmentUpload from "./AssignmentUpload";
import AllAssignments from "../students/AllAssignments";
import SportsAndClubs from "../students/Specific/SportsAndClubs";

function Course() {
  return (
    <div className="">
      <div className="bg-stone-700 light-border px-5 py-4">
        <AssignmentUpload />
      </div>
      <div className="">
        <SportsAndClubs />
      </div>
    </div>
  );
}

export default Course;
