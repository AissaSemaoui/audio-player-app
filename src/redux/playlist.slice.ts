import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { trackTypes } from "./trackList.slice";

export interface playlistTypes {
  tracks: any[];
  currentPlayTitle: string;
  nextTrackTitle: string;
  prevTrackTitle: string;
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    tracks: [],
    currentPlayTitle: "",
    nextTrackTitle: "",
    prevTrackTitle: "",
  } as playlistTypes,
  reducers: {
    addToPlaylist: (state: playlistTypes, action: { payload: string }) => {
      const newTrackName = action.payload;

      const updatedState = {
        tracks: [...state.tracks],
        currentPlayTitle: newTrackName,
        prevTrackTitle: state.tracks[state.tracks.length - 1],
        nextTrackTitle: state.tracks[0],
      };

      updatedState.tracks.push(newTrackName);
      return {
        ...state,
        ...updatedState,
      };
    },

    getNextTrackTitle: (state: playlistTypes) => {
      const currentPlayTitle = state.currentPlayTitle;
      const tracks = state.tracks;

      const currentPlayIndex = tracks.findIndex(
        (title) => title === currentPlayTitle
      );

      let updatedState = {};

      const lastTrackIndex = tracks.length - 1;

      console.log("this is current play index  : ", currentPlayIndex);

      if (currentPlayIndex === lastTrackIndex) {
        updatedState = {
          prevTrackTitle: tracks[currentPlayIndex] || "",
          currentPlayTitle: tracks[0] || "",
          nextTrackTitle: tracks[1] || "",
        };
      } else {
        updatedState = {
          prevTrackTitle: tracks[currentPlayIndex] || "",
          currentPlayTitle: tracks[currentPlayIndex + 1] || "",
          nextTrackTitle: tracks[currentPlayIndex + 2] || tracks[0] || "",
        };
      }

      return {
        ...state,
        ...updatedState,
      };
    },

    getPrevTrackTitle: (state: playlistTypes) => {
      const currentPlayTitle = state.currentPlayTitle;
      const tracks = state.tracks;

      const currentPlayIndex = tracks.findIndex(
        (title) => title === currentPlayTitle
      );
      console.log("currentPlayIndex : ", currentPlayIndex);

      let updatedState = {};

      const lastTrackIndex = tracks.length - 1;

      if (currentPlayIndex === 0) {
        updatedState = {
          currentPlayTitle: tracks[lastTrackIndex] || "",
          prevTrackTitle: tracks[lastTrackIndex - 1] || "",
          nextTrackTitle: tracks[currentPlayIndex] || "",
        };
      } else {
        updatedState = {
          prevTrackTitle:
            tracks[currentPlayIndex - 2] || tracks[lastTrackIndex] || "",
          currentPlayTitle: tracks[currentPlayIndex - 1] || "",
          nextTrackTitle: tracks[currentPlayIndex] || "",
        };
      }
      return {
        ...state,
        ...updatedState,
      };
    },
  },
});

export const { addToPlaylist, getNextTrackTitle, getPrevTrackTitle } =
  playlistSlice.actions;

export default playlistSlice;
