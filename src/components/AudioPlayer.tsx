import React, { useEffect, useState } from "react";
import { ActionIcon, Avatar, Slider, Text, Title } from "@mantine/core";
import {
  UilStepBackward,
  UilPlay,
  UilSkipForward,
  UilVolume,
  UilRepeat,
  UilPause,
} from "@iconscout/react-unicons";
import usePlayTrack from "../hooks/usePlayTrack";
import usePlaylist from "../hooks/usePlaylist";

// import jsmediatags from "jsmediatags";

function AudioPlayer() {
  const {
    currentPlay,
    play,
    isPlaying,
    pause,
    duration,
    changePosition,
    getCurrentPosition,
  } = usePlayTrack();

  return (
    <div className="relative h-28 w-full">
      <div className="w-full h-full flex justify-center items-center rounded-b-md bg-blue-800 border border-t-2 border-solid border-blue-700">
        <Controls
          {...{
            currentPlay,
            play,
            isPlaying,
            pause,
            duration,
            getCurrentPosition,
          }}
        />
      </div>
      <AudioTrack
        changePosition={changePosition}
        getCurrentPosition={getCurrentPosition}
        duration={duration}
        className="absolute left-0 top-0 flex items-center w-full -translate-y-1/2"
      />
    </div>
  );
}

const Controls = ({
  currentPlay,
  play,
  isPlaying,
  pause,
}: {
  currentPlay: any;
  play: any;
  isPlaying: boolean;
  pause: any;
}) => {
  const { metadata, coverImg } = currentPlay;
  const { getNextTrack, getPrevTrack } = usePlaylist();

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  return (
    <div className="flex w-full items-center px-5">
      <div className="flex-1 flex items-center gap-2 ">
        <Avatar
          radius="md"
          src={coverImg}
          className="shadow-blue-900 shadow-sm w-10 lg:w-12 h-10 lg:h-12"
        >
          {/* AM */}
        </Avatar>
        <div className="hidden md:block">
          <Title order={3} className="text-lg md:text-xl text-neutral-50">
            {metadata.title || "Uknown"}
          </Title>
          <Text className="text-sm text-neutral-50 font-poppins">
            {metadata.author || "Uknown author"}
          </Text>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ActionIcon
          variant="subtle"
          className="hover:bg-blue-700"
          onClick={getPrevTrack}
        >
          <UilStepBackward />
        </ActionIcon>
        <ActionIcon
          variant="filled"
          radius="xl"
          size={50}
          className="hover:bg-blue-600 duration-75"
          onClick={togglePlay}
        >
          {isPlaying ? <UilPause /> : <UilPlay />}
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          className="hover:bg-blue-700"
          onClick={getNextTrack}
        >
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

const AudioTrack = ({
  className,
  changePosition,
  getCurrentPosition,
  duration,
}: {
  className?: string;
  changePosition?: any;
  getCurrentPosition?: any;
  duration: number;
}) => {
  const [currentTime, setCurrentTime] = useState(0);

  changePosition(currentTime);

  let currentTimeFormatted = new Date(getCurrentPosition() * 1000)
    .toISOString()
    .substring(14, 19);

  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentTime(getCurrentPosition()),
      1000
    );
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div id="audio-line" className={`w-full ${className}`}>
      <Slider
        value={Math.round(getCurrentPosition())}
        onChange={setCurrentTime}
        // onChangeEnd={setCurrentTime}
        defaultValue={0}
        label={currentTimeFormatted}
        min={0}
        max={Math.round(duration)}
        className="w-full  "
        classNames={{
          track: "before:content-[''] before:h-2 ",
        }}
      />
    </div>
  );
};

export default AudioPlayer;
