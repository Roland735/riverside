import AdminLayout from "@/app/components/Universal/AdminLayout";
import Classes from "@/app/components/admin/Classes";
import Exams from "@/app/components/admin/Exams";
import React from "react";

function page() {
    return <AdminLayout><Exams />
        <Classes />
    </AdminLayout>;
}

export default page;
