import React from "react";

function TransportDetails() {
  return (
    <div className="border-2 border-emerald-600 rounded-md font-thin px-4 py-3 flex flex-col justify-between items-start space-y-2 bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-50">
      <div className="text-xl font-bold">Transport Details</div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Bus Route:</span>
        <span>Good Hope</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Pick Up Place:</span>
        <span>Newstead rd</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Pick Up Time:</span>
        <span>08:00hrs</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Drop Off Place:</span>
        <span>Good Hope</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        <span>Drop Off Time:</span>
        <span>16:00hrs</span>
      </div>
    </div>
  );
}

export default TransportDetails;
