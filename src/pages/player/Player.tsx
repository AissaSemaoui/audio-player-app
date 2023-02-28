import React from "react";
import { Title } from "@mantine/core";

function Player() {
  return (
    <div className="flex w-full bg-blue-900 overflow-y-auto">
      <div className="w-3/5 h-full p-6">
        <div className="bg-blue-700 w-full h-full rounded-lg shadow-gray-900 shadow-md border border-solid border-blue-600">
          <img src="/test.jpg" alt="audio cover" className="hidden" />
        </div>
      </div>
      <div className="w-2/5 h-full p-4 bg-blue-800 border-l border-solid border-blue-700">
        <Title>Player</Title>
      </div>
    </div>
  );
}

export default Player;
