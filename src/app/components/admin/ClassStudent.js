import { AiOutlineEllipsis } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

const studentData = [
  { id: 1, name: "John Doe", class: "Math 101", registrationNumber: "123456" },
  {
    id: 2,
    name: "Jane Smith",
    class: "English Literature",
    registrationNumber: "654321",
  },
  {
    id: 3,
    name: "Alice Johnson",
    class: "History",
    registrationNumber: "987654",
  },
];

const ClassStudents = (student) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md colors w-full">
      <table className="w-full min-w-full text-left">
        <thead>
          <tr className="text-xs font-semibold text-gray-700 bg-gray-200 border-b border-gray-400">
            <th className="px-3 py-2">Student</th>
            <th className="px-3 py-2">Class</th>
            <th className="px-3 py-2">Registration Number</th>
            <th className="px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr
              key={student.id}
              className="border-b border-gray-400 hover:bg-stone-500 "
            >
              <td className="px-3 py-2">{student.name}</td>
              <td className="px-3 py-2">{student.class}</td>
              <td className="px-3 py-2">{student.registrationNumber}</td>
              <td className="px-3 py-2 flex items-center space-x-2 ">
                <button className="text-stone-50 bg-blue-800 text-sm px-2 py-2 space-x-2 items-center focus:outline-none flex rounded-md">
                  <span>Edit: </span> <FaPencilAlt />
                </button>
                <button className="text-stone-50 bg-rose-800 text-sm px-2 py-2 space-x-2 items-center focus:outline-none flex rounded-md">
                  <span>Delete: </span> <FaPencilAlt />
                </button>
                <button className="text-stone-50 bg-yellow-500 text-sm px-2 py-2 space-x-2 items-center focus:outline-none flex rounded-md">
                  <span>Reset Password: </span> <FaPencilAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassStudents;
