"use client";
import React from "react";

import { FaBookmark } from "react-icons/fa";

function ClassCard({ className, classAverage, bestStudent }) {
    return <div>
        <div className="bg-white rounded-lg shadow-md px-4 py-5 flex flex-col items-center space-y-2 w-72 my-4">
            <h3 className="text-xl font-bold text-gray-800">
                <FaBookmark className="mr-2 text-lg inline-block" /> {className}
            </h3>
            <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Class Average:</span>
                <span className="text-lg font-bold text-blue-500">{classAverage}</span>
            </div>
            <div className="text-sm text-gray-500">Best Student:</div>
            <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">{bestStudent.name}</span>
                <span className="text-green-500 font-bold">
                    {bestStudent.grade} <FaBookmark className="inline-block text-lg ml-1" />
                </span>
            </div>
        </div>
    </div>;
}

export default ClassCard;
