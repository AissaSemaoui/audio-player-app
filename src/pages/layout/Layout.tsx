import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";

function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen max-h-screen w-full flex flex-col bg-blue-900">
      <header>
        <Navbar />
      </header>
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex">
          <Sidebar />
          <Outlet />
        </div>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default Layout;
