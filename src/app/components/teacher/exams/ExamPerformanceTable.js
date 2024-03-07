import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

const ExamPerformanceTable = () => {
    const data = [
        {
            date: "2023-10-27",
            subject: "Mathematics",
            averageMark: 78,
            deviationFromClassAverage: 3,
        },
        {
            date: "2023-11-10",
            subject: "Science",
            averageMark: 85,
            deviationFromClassAverage: 8,
        },
        {
            date: "2023-11-17",
            subject: "English Literature",
            averageMark: 72,
            deviationFromClassAverage: -2,
        },
    ];
    return (
        <div className="w-full overflow-auto rounded-lg shadows colors light-border">
            <table className="w-full min-w-max table-auto">
                <thead>
                    <tr className="text-left text-xs font-medium text-colors bg-stone-200 dark:bg-stone-900">
                        <th className="p-3">Date</th>
                        <th className="p-3">Subject</th>
                        <th className="p-3">Average Mark</th>
                        <th className="p-3">Deviation from Class Average</th>
                        <th className="p-3" />
                    </tr>
                </thead>
                <tbody>
                    {data.map((exam) => (
                        <tr key={exam.date} className="border-b border-gray-300 hover:bg-stone-500">
                            <td className="p-3 text-sm">{exam.date}</td>
                            <td className="p-3 text-sm">{exam.subject}</td>
                            <td className="p-3 text-sm">{exam.averageMark}</td>
                            <td className="p-3 text-sm">
                                {exam.deviationFromClassAverage > 0 ? (
                                    <span className="text-green-500">+{exam.deviationFromClassAverage}</span>
                                ) : (
                                    <span className="text-red-500">{exam.deviationFromClassAverage}</span>
                                )}
                            </td>
                            <td className="p-3 flex justify-end">
                                <button className="flex items-center text-sm text-blue-500 hover:text-blue-700">
                                    <AiOutlineDownload className="mr-1" />
                                    Download PDF
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExamPerformanceTable;
