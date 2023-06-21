import Sidebar from "@/components/Sidebar";
import React from "react";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar>
      <div className="h-full">{children}</div>;
    </Sidebar>
  );
};

export default UsersLayout;
