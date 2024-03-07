import React from "react";

function StudentFinances() {
  return (
    <div className="w-2/5 border-2 border-emerald-600 rounded-md px-3 py-2 bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-50 flex flex-col items-start space-y-3">
      <h1 className="text-center w-full font-semibold text-base">
        Student Finances
      </h1>
      <div className="flex flex-col space-y-3 w-full">
        <h2>Payments</h2>
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>21/12/2018:</span>
          <span>$5000</span>
        </div>
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>21/12/2018:</span>
          <span>$5000</span>
        </div>
        <div className="border-b-2 border-emerald-600 flex justify-between items-center w-full">
          <span>21/12/2018:</span>
          <span>$5000</span>
        </div>
        <div className="font-bold flex justify-between items-center w-full">
          <span>Balance:</span>
          <span className="text-emerald-600">$5000</span>
        </div>
      </div>
    </div>
  );
}

export default StudentFinances;
