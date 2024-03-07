import React from "react";
import DueAssingment from "./DueAssingment";

function DueAssigniments() {
  return (
    <div className="flex flex-col gap-y-5 py-5 items-center bg-stone-200  shadows dark:bg-stone-700 light-border">
      <h1 className="h1 dark:text-slate-50"> Subjects</h1>
      <div className=" flex flex-wrap justify-between gap-x-5 gap-y-10 items-center mx-10">
        <DueAssingment subject="Mathematics" />
        <DueAssingment subject="Science" />
        <DueAssingment subject="English" />
        <DueAssingment subject="Shona" />
        <DueAssingment subject="Food Science" />
        <DueAssingment subject="Chemistry" />
      </div>
    </div>
  );
}

export default DueAssigniments;
