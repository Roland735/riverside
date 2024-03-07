import React from "react";

function CareerProspects() {
  return (
    <div className="w-2/5 border-2 border-emerald-600 rounded-md px-3 py-2 bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-50 flex flex-col items-start space-y-3 ">
      <h1 className="text-center w-full font-semibold text-base">
        Career Prospects
      </h1>
      <div className="flex flex-col space-y-3 w-full">
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>Major 1:</span>
          <span>Software Engineering</span>
        </div>
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>Major 2:</span>
          <span>Production Engineering</span>
        </div>
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>Major 1:</span>
          <span>Data Science</span>
        </div>
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>Minor:</span>
          <span>Music</span>
        </div>
        <div className="flex justify-between items-center w-full">
          <span>College Aspiration:</span>
          <span>Havard</span>
        </div>
      </div>
    </div>
  );
}

export default CareerProspects;
