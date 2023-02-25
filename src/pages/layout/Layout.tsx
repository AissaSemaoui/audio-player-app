import React from "react";
import { Button } from "@mantine/core";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen max-h-screen w-full bg-blue-900">
      <header>
        <Navbar />
      </header>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
