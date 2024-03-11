import AdminLayout from "@/app/components/Universal/AdminLayout";
import UserManagement from "@/app/components/admin/UserManagement";
import ClassUsers from "@/app/components/admin/ClassUsers";
import React from "react";

function page() {
  return (
    <AdminLayout>
      <UserManagement />
      <ClassUsers StudentClassName="1 Blue" />
      <ClassUsers StudentClassName="1 Green" />
      <ClassUsers StudentClassName="2 Blue" />
      <ClassUsers StudentClassName="2 Green" />
      <ClassUsers StudentClassName="1 Blue" />
      <ClassUsers StudentClassName="1 Blue" />
    </AdminLayout>
  );
}

export default page;
