import React from "react";
import ClassBalance from "./ClassBalance";
import BestStudents from "./BestStudents";
import AverageMark from "./AverageMark";
import StudentList from "./StudentsList";
import SubjectAverages from "../../students/Specific/SubjectAverages";
import Anomalies from "../exams/Anomalies";

function Class() {
  return (
    <div className="m-5">
      <div className="flex mb-10">
        <div className="w-full flex flex-col ">
          <BestStudents />
        </div>
        <div className="w-1/3 px-5 flex flex-col justify-between space-y-5 ">
          <ClassBalance />
          <AverageMark />
        </div>
      </div>
      <div className="my-5">
        <div className="text-center mt-5 mb-2">
          <h1 className="text-xl font-bold text-colors">Average Marks</h1>
        </div>
        <div className="h-96 border-2 border-emerald-600 rounded-md colors">
          <SubjectAverages />
        </div>
      </div>
      <div className="my-10">
        <Anomalies />
      </div>
      <div className="colors">
        <StudentList />
      </div>
    </div>
  );
}

export default Class;
