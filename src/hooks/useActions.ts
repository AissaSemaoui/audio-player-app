import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playTrack } from "../redux/activeTrack.slice";
import { trackTypes } from "../redux/trackList.slice";

const useActions = () => {
  const dispatch = useDispatch();

  const playTrackAction = (data: trackTypes) => dispatch(playTrack(data));

  return { playTrackAction };
};

export default useActions;
