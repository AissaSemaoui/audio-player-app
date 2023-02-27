import React from "react";
import { ActionIcon, Title } from "@mantine/core";
import {
  UilHeartAlt,
  UilPlay,
  UilStepBackward,
} from "@iconscout/react-unicons";

function TrackCard() {
  return (
    <div className="relative group w-full h-full p-2 max-h-52 flex flex-col gap-2 overflow-hidden  border border-solid rounded-xl border-blue-700 hover:bg-blue-800 cursor-pointer">
      <div className="h-44 rounded-md overflow-hidden group-hover:after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-gray-800/40 after:to-gray-600/10 duration-75">
        <img
          src="/test.jpg"
          alt="test"
          className="w-full h-full object-cover object-center transform duration-100 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100 absolute top-2/3 group-hover:top-1/2 left-1/2 z-30 -translate-y-1/2 -translate-x-1/2 duration-75">
        <ActionIcon
          variant="filled"
          radius="xl"
          size={50}
          className="border border-purple-600 bg-purple-600 hover:bg-purple-700 duration-75 shadow-blue-900 shadow-2xl"
        >
          <UilPlay className="text-p" />
        </ActionIcon>
      </div>
      <div className="flex-1 h-20">
        <Title
          order={3}
          className="font-poppins font-semibold text-gray-200 text-base"
        >
          Track Name
        </Title>
        <p className="text-sm text-neutral-300">Author name</p>
      </div>
      <div className="hidden group-hover:flex justify-end">
        <ActionIcon
          variant="subtle"
          color="blue.2"
          className="hover:bg-blue-700"
        >
          <UilHeartAlt />
        </ActionIcon>
      </div>
    </div>
  );
}

export default TrackCard;
