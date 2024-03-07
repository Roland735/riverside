import Image from "next/image";
import React from "react";

function BestStudents() {
  return (
    <div className="flex px-3 py-2 justify-between flex-wrap">
      <div className=" colors flex flex-col items-center space-y-1 border-2 border-emerald-600 rounded-md px-3 py-2  w-1/4 mx-5 my-4 ">
        <span className="text-xl font-semibold4">Best Student</span>
        <div className="flex justify-between items-center space-x-2">
          <div className="h-16 w-16 rounded-full border-2 border-emerald-600 relative">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="">Donlon Ngwenya</div>
        </div>
      </div>
      <div className=" colors flex flex-col items-center space-y-1 border-2 border-emerald-600 rounded-md px-3 py-2  w-1/4 mx-5 my-4">
        <span className="text-xl font-semibold4">Most Improved</span>
        <div className="flex justify-between items-center space-x-2">
          <div className="h-16 w-16 rounded-full border-2 border-emerald-600 relative">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="">Donlon Ngwenya</div>
        </div>
      </div>
      <div className=" colors flex flex-col items-center space-y-1 border-2 border-emerald-600 rounded-md px-3 py-2  w-1/4 mx-5 my-4">
        <span className="text-xl font-semibold4">Class Teacher</span>
        <div className="flex justify-between items-center space-x-2">
          <div className="h-16 w-16 rounded-full border-2 border-emerald-600 relative">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="">Donlon Ngwenya</div>
        </div>
      </div>
      <div className=" colors flex flex-col items-center space-y-1 border-2 border-emerald-600 rounded-md px-3 py-2  w-1/4 mx-5 my-4">
        <span className="text-xl font-semibold4">Class Prefect</span>
        <div className="flex justify-between items-center space-x-2">
          <div className="h-16 w-16 rounded-full border-2 border-emerald-600 relative">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="">Donlon Ngwenya</div>
        </div>
      </div>
      <div className=" colors flex flex-col items-center space-y-1 border-2 border-emerald-600 rounded-md px-3 py-2  w-1/4 mx-5 my-4">
        <span className="text-xl font-semibold4">Class Rep</span>
        <div className="flex justify-between items-center space-x-2">
          <div className="h-16 w-16 rounded-full border-2 border-emerald-600 relative">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="">Donlon Ngwenya</div>
        </div>
      </div>
      <div className=" colors flex flex-col items-center space-y-1 border-2 border-emerald-600 rounded-md px-3 py-2  w-1/4 mx-5 my-4">
        <span className="text-xl font-semibold4">Lowest Average</span>
        <div className="flex justify-between items-center space-x-2">
          <div className="h-16 w-16 rounded-full border-2 border-red-600 relative">
            <Image src={"/Roland.jpg"} fill className="rounded-full" />
          </div>
          <div className="">Donlon Ngwenya</div>
        </div>
      </div>
    </div>
  );
}

export default BestStudents;
