import ParentLayout from "@/app/components/Universal/ParentLayout";
import React from "react";
import DueAssigniments from "@/app/components/students/DueAssigniments";
import OverDueAssignments from "@/app/components/students/OverDueAssignments";

import AllAssignments from "@/app/components/students/AllAssignments";

function page() {
    return <ParentLayout>
        <DueAssigniments />
        <AllAssignments />
        <OverDueAssignments />

    </ParentLayout>;
}

export default page;
