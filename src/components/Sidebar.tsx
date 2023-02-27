import React from "react";
import { ActionIcon } from "@mantine/core";

// Import Icons
import {
  UilEstate,
  UilSlidersVAlt,
  UilRecordAudio,
} from "@iconscout/react-unicons";

import ROUTES from "../utils/routes";
import { Link } from "react-router-dom";

const links = [
  {
    route: ROUTES.HOME,
    name: "home",
    Icon: UilEstate,
  },
  {
    route: ROUTES.PLAYER,
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
    <div className="w-max h-full pt-10 px-3 bg-blue-800 border-r border-solid border-blue-700">
      {links.map(({ route, name, Icon }) => (
        <Link to={route}>
          <ActionIcon
            variant="filled"
            bg="blue.8"
            color="blue.5"
            className="mb-3"
          >
            <Icon />
          </ActionIcon>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
