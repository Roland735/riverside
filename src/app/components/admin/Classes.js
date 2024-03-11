"use client";
import React from "react";
import ClassCard from "./ClassCard"; // Assuming ClassCard is in the same directory
import { AiOutlineBook, AiStarOutline } from "react-icons/ai";  // Import icons

function Classes() {
    const classData = [
        {
            className: "Mathematics (101)",
            classAverage: 78.5,
            bestStudent: {
                name: "Alice Johnson",
                grade: "A+",
            },
        },
        {
            className: "English Literature (102)",
            classAverage: 82.1,
            bestStudent: {
                name: "David Miller",
                grade: "A",
            },
        },
        {
            className: "History (103)",
            classAverage: 75.2,
            bestStudent: {
                name: "Emily Williams",
                grade: "B+",
            },
        },
    ];

    return (
        <div className="flex justify-between items-center flex-wrap colors px-5 light-border">
            {/* Map through classData and render ClassCard components */}
            {classData.map((classItem) => (
                <ClassCard
                    key={classItem.className} // Use unique key for each card
                    className={classItem.className}
                    classAverage={classItem.classAverage}
                    bestStudent={classItem.bestStudent}
                />
            ))}
        </div>
    );
}

export default Classes;
