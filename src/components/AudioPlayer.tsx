import React, { useEffect, useState } from "react";
import { ActionIcon, Avatar, Text, Title } from "@mantine/core";
import {
  UilStepBackward,
  UilPlay,
  UilSkipForward,
  UilVolume,
  UilRepeat,
} from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { Howl, Howler } from "howler";

// import jsmediatags from "jsmediatags";

function AudioPlayer() {
  return (
    <div className="relative h-28 w-full">
      <div className="w-full h-full flex justify-center items-center rounded-b-md bg-blue-800 border border-solid border-blue-700">
        <Controls />
      </div>
      <AudioTrack className="absolute left-0 top-0 flex items-center w-full -translate-y-1/2" />
    </div>
  );
}

const Controls = () => {
  const [coverArt, setCoverArt] = useState<string>("");
  const currentPlay = useSelector((state: any) => state.activeTrack.audioData);

  useEffect(() => {
    console.log("we are inside controls", currentPlay);
    if (currentPlay.dataUrl) {
      setCoverArt(currentPlay.coverImg);

      const sound: Howl = new Howl({
        src: [currentPlay.dataUrl],
        format: ["mp3"],
        html5: true,
        onplayerror: function () {
          console.log("Failed to play sound");
        },
        onload: () => {
          URL.revokeObjectURL(currentPlay.dataUrl);
        },
      });
      // Play the sound
      console.log("before play xD");
      sound.play();
    }
  }, [currentPlay]);

  return (
    <div className="flex w-full items-center px-5">
      <div className="flex-1 flex items-center gap-2 ">
        <Avatar
          radius="md"
          src={coverArt}
          className="shadow-blue-900 shadow-sm w-10 lg:w-12 h-10 lg:h-12"
        >
          {/* AM */}
        </Avatar>
        <div className="hidden md:block">
          <Title order={3} className="text-lg md:text-xl text-neutral-50">
            Track Name
          </Title>
          <Text className="text-sm text-neutral-50 font-poppins">
            Author name
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ActionIcon variant="subtle" className="hover:bg-blue-700">
          <UilStepBackward />
        </ActionIcon>
        <ActionIcon
          variant="filled"
          radius="xl"
          size={50}
          className="hover:bg-blue-600 duration-75"
        >
          <UilPlay />
        </ActionIcon>
        <ActionIcon variant="subtle" className="hover:bg-blue-700">
          <UilSkipForward />
        </ActionIcon>
      </div>
      <div className="flex justify-end gap-2 flex-1">
        <ActionIcon variant="subtle" className="hover:bg-blue-700">
          <UilRepeat />
        </ActionIcon>
        <ActionIcon variant="subtle" className="hover:bg-blue-700">
          <UilVolume />
        </ActionIcon>
      </div>
    </div>
  );
};

const AudioTrack = ({ className }: { className?: string }) => {
  return (
    <div id="audio-line" className={` ${className}`}>
      <div className="w-1/2 rounded-md h-1 bg-purple-500"></div>
      <div
        id="track-head"
        className="w-6 h-3 bg-purple-600 rounded-full shadow-blue-900 shadow-xl -ml-3 cursor-pointer"
      ></div>
    </div>
  );
};

export default AudioPlayer;
