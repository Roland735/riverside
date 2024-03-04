"use client";
import React from "react";
import { useState } from "react";
import ParentLayout from "../components/Universal/ParentLayout";
import Header from "../components/Universal/Header";
import DueAssigniments from "../components/students/DueAssigniments";
import OverDueAssignments from "../components/students/OverDueAssignments";

function page() {
  return (
    <ParentLayout>
      <DueAssigniments />
      <OverDueAssignments />
    </ParentLayout>
  );
}

export default page;
