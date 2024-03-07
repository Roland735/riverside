"use client";
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";

function AssignmentUpload() {
  const [subject, setSubject] = useState("");
  const [assignmentName, setAssignmentName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [file, setFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "subject":
        setSubject(value);
        break;
      case "assignmentName":
        setAssignmentName(value);
        break;
      case "dueDate":
        setDueDate(value);
        break;
      default:
        break;
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission (replace with your actual submission logic)
    console.log("Submitted assignment:", {
      subject,
      assignmentName,
      dueDate,
      file,
    });
    setSubject("");
    setAssignmentName("");
    setDueDate("");
    setFile(null);
  };

  return (
    <div className="flex flex-col gap-4 p-4 colors rounded-lg shadow-md">
      <h2 className="text-xl font-medium text-color">Upload Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="subject" className="text-sm font-medium text-color">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={handleInputChange}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label
            htmlFor="assignmentName"
            className="text-sm font-medium text-color"
          >
            Assignment Name
          </label>
          <input
            type="text"
            id="assignmentName"
            name="assignmentName"
            value={assignmentName}
            onChange={handleInputChange}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="dueDate" className="text-sm font-medium text-color">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={dueDate}
            onChange={handleInputChange}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-4 my-5">
          <label htmlFor="file" className="text-sm font-medium text-color">
            Upload File
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700"
        >
          <BsPlusLg className="mr-2" /> Upload Assignment
        </button>
      </form>
    </div>
  );
}

export default AssignmentUpload;
