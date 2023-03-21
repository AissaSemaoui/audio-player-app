import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNextTrackTitle,
  getPrevTrackTitle,
  playlistTypes,
} from "../redux/playlist.slice";
import { trackTypes } from "../redux/trackList.slice";
import { playTrack } from "../redux/activeTrack.slice";

const usePlaylist = () => {
  const dispatch = useDispatch();

  const playlist = useSelector((state: any) => state.playlist as playlistTypes);
  const trackList = useSelector(
    (state: any) => state.trackList.value as trackTypes[]
  );

  const getNextTrack = () => {
    console.log("playlist : ", playlist, trackList);
    let track;
    track = trackList.find(
      (track: trackTypes) => track?.metadata?.title === playlist.nextTrackTitle
    );
    track && dispatch(playTrack(track));

    dispatch(getNextTrackTitle());

    console.log("here is the track : ", track);
  };

  const getPrevTrack = () => {
    let track;
    track = trackList.find(
      (track: trackTypes) => track?.metadata?.title === playlist.prevTrackTitle
    );

    dispatch(getPrevTrackTitle());
    console.log("playlist : ", playlist, trackList);

    track && dispatch(playTrack(track));

    console.log("here is the track : ", track);
  };

  return { getNextTrack, getPrevTrack };
};

export default usePlaylist;
