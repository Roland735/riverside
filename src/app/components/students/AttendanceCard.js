import React from "react";
import { FaChartLine, FaUser } from "react-icons/fa";

function AttendanceCard() {
  return (
    <div className=" dark:bg-sky-900 shadows w-3/12 px-5 py-4">
      <div className="flex justify-between">
        <div className="">
          <h1 className="flex items-center space-x-3">
            <span>
              <FaUser />
            </span>
            <span> Attendance Rating</span>
          </h1>
        </div>
        <div className="bg-green-500 rounded-md">+0.00%</div>
      </div>
      <div className="text-3xl text-center my-5  w-24 h-24 flex justify-center items-center rounded-full bg-emerald-500">
        <h1>77%</h1>
      </div>
    </div>
  );
}

export default AttendanceCard;