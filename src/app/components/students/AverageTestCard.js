import React from "react";
import { FaChartLine, FaUser } from "react-icons/fa";

function AverageTestCard() {
  return (
    <div className=" dark:bg-stone-900 shadows w-64 my-2  px-5 py-4">
      <div className="flex justify-between">
        <div className="">
          <h1 className="flex items-center space-x-3 dark:text-slate-50 text-stone-900">
            <span>
              <FaUser />
            </span>
            <span>Average Test</span>
          </h1>
        </div>
        <div className="bg-yellow-500 rounded-md">+0.00%</div>
      </div>
      <div className="text-3xl text-center my-5  w-24 h-24 flex justify-center items-center rounded-full bg-yellow-500">
        <h1>68%</h1>
      </div>
    </div>
  );
}

export default AverageTestCard;
