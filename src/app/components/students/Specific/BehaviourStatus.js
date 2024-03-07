import React from "react";

function BehaviourStatus() {
  return (
    <div className="border-2 border-emerald-600 rounded-md font-thin px-4 py-3 flex flex-col justify-between items-start space-y-2 bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-50">
      <div className="text-xl font-bold">Behaviour Status</div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Prefect:</span> <span>Good</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Class Teacher:</span>
        <span>Good</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Counselor:</span>
        <span>Excellent</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Complaints:</span>
        <span>1</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Praises:</span>
        <span>5</span>
      </div>
    </div>
  );
}

export default BehaviourStatus;
