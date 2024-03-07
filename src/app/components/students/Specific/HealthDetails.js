import React from "react";
import { Fa } from "react-icons";

function HealthDetails() {
  return (
    <div className="border-2 border-emerald-600 rounded-md font-thin px-4 py-3 flex flex-col justify-between items-start space-y-2 bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-50">
      <div className="text-xl font-bold">Health Details</div>
      <div className="border-b-2 border-emerald-800 w-full">
        Doctor: <span>Jason Staturm</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        Contact Number: <span>201292933</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        Allegies: <span>201292933</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        Diet Restrictions: <span>201292933</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        PDF: <span></span>
      </div>
    </div>
  );
}

export default HealthDetails;
