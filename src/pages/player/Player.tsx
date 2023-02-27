import { Title } from "@mantine/core";
import React from "react";

function Player() {
  return (
    <div className="flex w-full max-h-full bg-blue-900 overflow-y-auto">
      <div className="w-1/2 h-full p-6">
        <div className="bg-blue-700 w-full h-full rounded-lg shadow-blue-900 shadow-lg border border-solid border-blue-800">
          <img src="/test.jpg" alt="audio cover" className="hidden" />
        </div>
      </div>
      <div className="w-1/2 h-full bg-blue-800">
        <Title>Player</Title>
      </div>
    </div>
  );
}

export default Player;
