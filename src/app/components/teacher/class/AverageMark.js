import React from "react";
import { FaChartBar } from "react-icons/fa";

function AverageMark() {
  return (
    <div className="border-2 border-emerald-600 rounded-md px-3 py-4  flex justify-between items-center  mb-5 colors">
      <div className="">
        <span className="text-3xl flex flex-col text-emerald-600">90%</span>
        <span className=" text-xl font-thin">Average Mark</span>
      </div>
      <div className="text-6xl text-emerald-600">
        <FaChartBar />
      </div>
    </div>
  );
}

export default AverageMark;
