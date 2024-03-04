import React from "react";
import { FaFileWord } from "react-icons/fa";

function DueAssingment() {
  return (
    <div className="shadow-xl bg-slate-50 dark:bg-sky-800 my-4 flex items-center space-x-10 justify-between min-w-72 px-4 hover:bg-slate-400 dark:hover:bg-slate-600 cursor-pointer transition-colors duration-500 rounded-md">
      <div className="">
        <div className="font-bold text-slate-800 dark:text-slate-200 my-6">
          <h1>Mathematics</h1>
          <h1>21/03/2025</h1>
        </div>
        <div className="">
          <h2 className=" dark:text-slate-50 text-sky-950 font-normal">
            Mrs Mataruse
          </h2>
        </div>
      </div>
      <div className="text-3xl dark:text-slate-50  ">
        <FaFileWord />
      </div>
    </div>
  );
}

export default DueAssingment;
