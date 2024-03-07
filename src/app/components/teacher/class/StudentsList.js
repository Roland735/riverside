import React from "react";

const studentData = [
  {
    studentId: "S1234",
    firstName: "Student A",
    lastName: "Anonymous",
    classAttendance: "High",
    disciplineStatus: "Positive",
    averageMark: 85,
  },
  {
    studentId: "S5678",
    firstName: "Student B",
    lastName: "Anonymous",
    classAttendance: "Moderate",
    disciplineStatus: "Neutral",
    averageMark: 72,
  },
  {
    studentId: "S9012",
    firstName: "Student C",
    lastName: "Anonymous",
    classAttendance: "Low",
    disciplineStatus: "Needs Improvement",
    averageMark: 60,
  },
  {
    studentId: "S3456",
    firstName: "Student D",
    lastName: "Anonymous",
    classAttendance: "Moderate",
    disciplineStatus: "Needs Support",
    averageMark: 78,
  },
  {
    studentId: "S7890",
    firstName: "Student E",
    lastName: "Anonymous",
    classAttendance: "High",
    disciplineStatus: "Positive",
    averageMark: 90,
  },
  {
    studentId: "S1357",
    firstName: "Student F",
    lastName: "Anonymous",
    classAttendance: "Low",
    disciplineStatus: "Needs Improvement",
    averageMark: 65,
  },
  {
    studentId: "S9246",
    firstName: "Student G",
    lastName: "Anonymous",
    classAttendance: "High",
    disciplineStatus: "Positive",
    averageMark: 82,
  },
  {
    studentId: "S8529",
    firstName: "Student H",
    lastName: "Anonymous",
    classAttendance: "Moderate",
    disciplineStatus: "Neutral",
    averageMark: 76,
  },
];
function StudentsList() {
  return (
    <div className="container border-2 border-emerald-600 rounded-md ">
      <h2 className="text-color my-2 mx-3">
        Class: <span>Lower 6</span>
      </h2>
      <table className="table-auto w-full text-sm overflow-auto">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Lastname</th>
            <th className="px-4 py-2">Attendance Rate</th>
            <th className="px-4 py-2">Discipline</th>
            <th className="px-4 py-2">Average Mark</th>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          {studentData.map((student) => (
            <tr
              key={student?.id}
              className="hover:bg-emerald-600 hover:text-slate-50"
            >
              <td className="px-4 py-2 text-center">{student?.studentId}</td>
              <td className="px-4 py-2 text-center">{student?.firstName}</td>
              <td className="px-4 py-2 text-center">{student?.lastName}</td>
              <td className="px-4 py-2 text-center">
                {student?.classAttendance}
              </td>
              <td className="px-4 py-2 text-center">
                {student?.disciplineStatus}
              </td>
              <td className="px-4 py-2 text-center">{student?.averageMark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
