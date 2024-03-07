import React from "react";
import { FaFileWord, FaUserFriends } from "react-icons/fa";

function DueAssingment(props) {
  return (
    <div className="shadow-xl bg-stone-400 dark:bg-stone-900 shadows my-4 flex items-center space-x-10 justify-between min-w-72 px-4 hover:bg-stone-500 dark:hover:bg-stone-600 cursor-pointer transition-colors duration-500 rounded-md">
      <div className="">
        <div className="font-bold text-stone-800 dark:text-stone-200 my-6">
          <h1>{props.subject}</h1>
          <h1>21/03/2025</h1>
        </div>
        <div className="">
          <h2 className=" dark:text-stone-50 text-stone-950 font-normal">
            Mrs Mataruse
          </h2>
        </div>
      </div>
      <div className="text-3xl dark:text-stone-50  ">
        <FaUserFriends />
      </div>
    </div>
  );
}

export default DueAssingment;
