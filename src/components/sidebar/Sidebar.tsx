import React from "react";
import { ActionIcon } from "@mantine/core";

// Import Icons
import {
  UilEstate,
  UilSlidersVAlt,
  UilRecordAudio,
} from "@iconscout/react-unicons";

const links = [
  {
    route: "/",
    name: "home",
    Icon: UilEstate,
  },
  {
    route: "/live",
    name: "live",
    Icon: UilRecordAudio,
  },
  {
    route: "/settings",
    name: "settings",
    Icon: UilSlidersVAlt,
  },
];

function Sidebar() {
  return (
    <div className="w-max h-full pt-10 px-3 bg-blue-800 border-r border-b border-solid border-blue-700">
      {links.map(({ route, name, Icon }) => (
        <ActionIcon
          variant="filled"
          bg="blue.8"
          color="blue.5"
          className="mb-2"
        >
          <Icon />
        </ActionIcon>
      ))}
    </div>
  );
}

export default Sidebar;
