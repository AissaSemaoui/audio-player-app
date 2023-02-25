import { Avatar, TextInput, Title } from "@mantine/core";
import React from "react";

// Import Icons
import { UilSearch } from "@iconscout/react-unicons";

function Navbar() {
  return (
    <nav className="w-full h-full flex justify-between gap-2 px-4 py-2 bg-blue-700">
      <Title order={1} size="h2" className="text-white">
        Audio Laby
      </Title>
      <TextInput
        variant="filled"
        className="w-96 max-w-full"
        classNames={{
          input: "bg-blue-600",
        }}
        icon={<UilSearch />}
      ></TextInput>
      <Avatar color="blue" radius="xl">
        AS
      </Avatar>
    </nav>
  );
}

export default Navbar;
