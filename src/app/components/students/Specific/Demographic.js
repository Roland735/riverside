import Image from "next/image";
import React from "react";

function Demographic() {
  return (
    <div className="text-base font-thin h-72 w-auto dark:text-emerald-50 text-stone-900 rounded-md border-2 border-emerald-600 p-4 flex flex-col justify-between items-start space-y-1 bg-stone-300 dark:bg-stone-700 ">
      <div className=" flex justify-start items-center space-x-4">
        <div className="relative h-32 w-32 rounded-full border-2 border-emerald-600">
          <Image src={"/Roland.jpg"} fill className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <span>Emmanuel</span>
          <span>Mukutipa</span>
        </div>
      </div>
      <div className="flex space-x-3 border-b-2 border-emerald-800 w-full">
        <span>Class:</span>
        <span>Form 4</span>
      </div>
      <div className="flex space-x-3 border-b-2 border-emerald-800 w-full">
        <span>Age:</span>
        <span>16</span>
      </div>
      <div className="flex space-x-3 border-b-2 border-emerald-800 w-full">
        <span>Reg Number:</span>
        <span>C34324545F</span>
      </div>
    </div>
  );
}

export default Demographic;
