import React from "react";
import OverDueAssignment from "./OverDueAssignment";

function OverDueAssignments() {
  return (
    <div className="flex flex-col gap-y-5 py-5 items-center bg-sky-100 shadows dark:bg-sky-950">
      <h1 className="h1 dark:text-slate-50"> Over Due Assignments</h1>
      <div className=" flex flex-wrap justify-between gap-x-5 gap-y-10 items-center mx-10">
        <OverDueAssignment />
        <OverDueAssignment />
        <OverDueAssignment />
        <OverDueAssignment />
        <OverDueAssignment />
      </div>
    </div>
  );
}

export default OverDueAssignments;
