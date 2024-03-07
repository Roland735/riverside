"use client";
import React from "react";
import { useState } from "react";
import ParentLayout from "../components/Universal/ParentLayout";
import Header from "../components/Universal/Header";
import DueAssigniments from "../components/students/DueAssigniments";
import OverDueAssignments from "../components/students/OverDueAssignments";
import AttendanceCard from "../components/students/AttendanceCard";
import AverageTestCard from "../components/students/AverageTestCard";
import AssignmentAverage from "../components/students/AssignmentAverage";
import Demerits from "../components/students/Demerits";

function page() {
  return (
    <ParentLayout>
      <div className=" dark:bg-stone-700 bg-stone-200 light-border shadows px-10 py-4 flex justify-between flex-wrap transition-opacity duration-1000">
        <AttendanceCard />
        <AverageTestCard />
        <AssignmentAverage />
        <Demerits />
      </div>
      <DueAssigniments />
      <OverDueAssignments />
    </ParentLayout>
  );
}

export default page;
