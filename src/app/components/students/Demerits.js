import React from "react";
import { FaChartLine, FaUser } from "react-icons/fa";
function Demerits() {
  return (
    <div className=" dark:bg-yellow-400 shadows w-36 px-5 my-2  py-4">
      <div className="flex justify-between">
        <div className="">
          <h1 className="flex items-center space-x-3">
            <span>
              <FaUser />
            </span>
          </h1>
        </div>
        <div className="bg-green-500 rounded-md">+0.00%</div>
      </div>
      <div className="text-xl text-center my-5  w-24 h-24 flex flex-col justify-center items-center rounded-full bg-emerald-500">
        <h1>5</h1> <span className="text-sm">Demerits</span>
      </div>
    </div>
  );
}

export default Demerits;
