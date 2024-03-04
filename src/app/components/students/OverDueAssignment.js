import React from "react";
import { FaFileWord } from "react-icons/fa";

function OverDueAssignment() {
  return (
    <div className="shadow-xl bg-sky-50 dark:bg-sky-800 my-4 flex items-center space-x-10 justify-between min-w-72 px-4 hover:bg-sky-400 dark:hover:bg-sky-600 cursor-pointer transition-colors duration-500 rounded-md">
      <div className="">
        <div className="font-bold text-sky-800 dark:text-sky-200 my-6">
          <h1>Mathematics</h1>
          <h1>21/03/2025</h1>
        </div>
        <div className="">
          <h2 className=" dark:text-sky-50 text-sky-950 font-normal">
            Mrs Mataruse
          </h2>
        </div>
      </div>
      <div className="text-3xl dark:text-sky-50  ">
        <FaFileWord />
      </div>
    </div>
  );
}

export default OverDueAssignment;
