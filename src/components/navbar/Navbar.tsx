import { ActionIcon, Avatar, TextInput, Title } from "@mantine/core";
import React from "react";

// Import Icons
import { UilSearch } from "@iconscout/react-unicons";

function Navbar() {
  return (
    <nav className="w-full h-full flex justify-between items-center gap-2 px-4 py-2 bg-blue-800 border-b border-solid border-blue-700">
      <Title
        order={1}
        className="text-base md:text-lg my-auto text-white cursor-pointer"
      >
        Audio Laby
      </Title>
      <TextInput
        variant="filled"
        className="hidden md:block md:w-96 max-w-full"
        placeholder="search for audio, authors..."
        classNames={{
          input: "bg-blue-700 focus:bg-white duration-75 ",
        }}
        icon={<UilSearch />}
      ></TextInput>
      <div className="flex items-center gap-4 text-blue-100">
        <div className="md:hidden">
          <ActionIcon variant="filled" color="blue.5">
            <UilSearch />
          </ActionIcon>
        </div>
        <div className="flex gap-2 items-center">
          <Title order={4} className="max-md:hidden">
            Aissa Semaoui
          </Title>
          <Avatar color="blue" radius="xl">
            AS
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
