import React from "react";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import AudioPlayer from "../../components/AudioPlayer";

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-screen max-h-screen flex flex-col bg-blue-900">
      <header>
        <Navbar />
      </header>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 flex overflow-y-hidden">
          <Sidebar />
          <Outlet />
        </div>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default Layout;
