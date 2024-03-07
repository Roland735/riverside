import React from "react";

function GurdianDetails() {
  return (
    <div className="border-2 border-emerald-600 rounded-md font-thin px-4 py-3 flex flex-col justify-between items-start space-y-2 bg-stone-300 dark:bg-stone-700 text-stone-900 dark:text-stone-50">
      <div className="text-xl font-bold">Guardian Details</div>
      <div className="border-b-2 border-emerald-800 w-full">
        Name: <span>Jason Staturm</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        National ID: <span>201292933</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        Phone Number: <span>201292933</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full">
        Email Adress: <span>201292933</span>
      </div>
      <div className="border-b-2 border-emerald-800 w-full ">
        Emergency number: <span>0777683993</span>
      </div>
    </div>
  );
}

export default GurdianDetails;
