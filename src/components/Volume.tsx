import React from "react";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import { UilVolume, UilVolumeMute } from "@iconscout/react-unicons";
import { ActionIcon, Dialog, Slider } from "@mantine/core";
import { Howler } from "howler";

function Volume() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const ref = useClickOutside(() => close());

  const defaultVolume = Howler.volume();

  const handleVolume = (value: number) => Howler.volume(value);

  const isMute = Howler.volume() === 0;

  console.log(
    "we are inside volume control : ",
    defaultVolume,
    handleVolume(defaultVolume),
    isMute
  );

  return (
    <div>
      <ActionIcon
        variant="subtle"
        className="hover:bg-blue-700"
        onClick={toggle}
      >
        {isMute ? <UilVolumeMute /> : <UilVolume />}
      </ActionIcon>

      <Dialog
        className="min-h-max w-60 !-translate-y-5"
        ref={ref}
        opened={opened}
        onClose={close}
      >
        <Slider
          size={6}
          min={0}
          max={1}
          step={0.05}
          defaultValue={defaultVolume}
          label={(value) => Math.round(value * 10)}
          thumbSize={12}
          onChange={handleVolume}
          classNames={{
            thumb: "border-blue-50",
          }}
        />
      </Dialog>
    </div>
  );
}

export default Volume;
