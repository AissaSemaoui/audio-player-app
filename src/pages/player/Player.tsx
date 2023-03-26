import React, { ReactNode, RefObject, useEffect, useRef } from "react";
import { ActionIcon, Avatar, Text, Title } from "@mantine/core";
import { useSelector } from "react-redux";
import { trackTypes } from "../../redux/trackList.slice";
import { playlistTypes } from "../../redux/playlist.slice";
import { RootState } from "../../redux/store";
import { UilDraggabledots, UilTrashAlt } from "@iconscout/react-unicons";

function Player() {
  const currentPlay = useSelector(
    (state: any) => state.activeTrack.audioData as trackTypes
  );

  const currentPlaylist = useSelector(
    (state: RootState) => state.playlist.tracks
  );

  // const draggableTracks: RefObject<HTMLDivElement[]> = useRef([]);

  // const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.currentTarget.classList.add("dragging");
  // };
  // const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.currentTarget.classList.remove("dragging");
  // };

  // useEffect(() => {
  //   draggableTracks?.current?.forEach((track) => {
  //     track.addEventListener("dragstart", handleDragStart);
  //     track.addEventListener("dragend", handleDragEnd);
  //   });

  //   return () => {
  //     draggableTracks?.current?.forEach((track) => {
  //       track.removeEventListener("dragstart", handleDragStart);
  //       track.removeEventListener("dragend", handleDragEnd);
  //     });
  //   };
  // }, [draggableTracks]);

  return (
    <div className="flex w-full bg-blue-900 overflow-y-auto">
      <div className="w-3/5 p-6">
        <div className="bg-blue-700 w-full h-full p-4 rounded-lg shadow-gray-900 shadow-md border border-solid border-blue-600">
          <div className="group h-4/5 w-full rounded-md overflow-hidden border border-solid border-blue-800 bg-blue-800">
            <img
              src={currentPlay.coverImg}
              className="w-full h-full object-contain group-hover:scale-110 duration-150 ease-out"
              alt="audio cover"
            />
          </div>
          <div className="">
            <Title order={2} mt="xl">
              {currentPlay.metadata.title}
            </Title>
            <Text>
              <Text component="span" weight="bold">
                Album : &nbsp;
              </Text>
              {currentPlay.metadata.album}
            </Text>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <Avatar
              src={currentPlay.coverImg}
              className="shadow-sm"
              radius={50}
            >
              {currentPlay.metadata.author}
            </Avatar>
            <Text weight="bold">{currentPlay.metadata.author}</Text>
          </div>
        </div>
      </div>
      <div className="w-2/5 h-full p-4 bg-blue-800 border-l border-solid border-blue-700">
        <Title>Player</Title>
        <div className="mt-4">
          {currentPlaylist.map((track) => (
            <div
              // ref={(ref: HTMLDivElement) => draggableTracks.current?.push(ref)}
              onDrag={(event) => {
                event.currentTarget.classList.add("dragging");
              }}
              draggable
              className="flex items-center justify-between gap-4 mb-2 p-4 bg-blue-700 border border-blue-700 hover:border-blue-600 rounded-md shadow-sm"
            >
              <div className="flex items-center gap-4">
                <Avatar src={track.coverImg} alt={track.title} />
                <Text>{track.title}</Text>
              </div>
              <div className="flex items-center gap-2">
                <ActionIcon variant="subtle" color="red" size="sm">
                  <UilTrashAlt />
                </ActionIcon>
                <UilDraggabledots className="cursor-move" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Player;
