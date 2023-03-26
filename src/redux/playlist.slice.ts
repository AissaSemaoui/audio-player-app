import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";
import { trackTypes } from "./trackList.slice";

export interface playlistTypes {
  tracks: playlistTrack[];
  currentPlayTitle: string;
  nextTrackTitle: string;
  prevTrackTitle: string;
}

interface playlistTrack {
  title: string;
  coverImg: string;
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
    addToPlaylist: (
      state: playlistTypes,
      action: { payload: playlistTrack }
    ) => {
      const newTrack = action.payload;

      const updatedState = {
        tracks: [...state.tracks],
        currentPlayTitle: newTrack?.title || state.currentPlayTitle,
        prevTrackTitle: state.tracks[state.tracks.length - 1]?.title || "",
        nextTrackTitle: state.tracks[0]?.title || "",
      };

      updatedState.tracks.push(newTrack);
      return {
        ...state,
        ...updatedState,
      };
    },

    getNextTrackTitle: (state: playlistTypes) => {
      const currentPlayTitle = state.currentPlayTitle;
      const tracks = state.tracks;

      const currentPlayIndex = tracks.findIndex(
        (track) => track.title === currentPlayTitle
      );

      let updatedState = {};

      const lastTrackIndex = tracks.length - 1;

      console.log("this is current play index  : ", currentPlayIndex);

      if (currentPlayIndex === lastTrackIndex) {
        updatedState = {
          prevTrackTitle: tracks[currentPlayIndex]?.title || "",
          currentPlayTitle: tracks[0]?.title || "",
          nextTrackTitle: tracks[1]?.title || "",
        };
      } else {
        updatedState = {
          prevTrackTitle: tracks[currentPlayIndex]?.title || "",
          currentPlayTitle: tracks[currentPlayIndex + 1]?.title || "",
          nextTrackTitle:
            tracks[currentPlayIndex + 2]?.title || tracks[0]?.title || "",
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
        (track) => track.title === currentPlayTitle
      );
      console.log("currentPlayIndex : ", currentPlayIndex);

      let updatedState = {};

      const lastTrackIndex = tracks.length - 1;

      if (currentPlayIndex === 0) {
        updatedState = {
          currentPlayTitle: tracks[lastTrackIndex]?.title || "",
          prevTrackTitle: tracks[lastTrackIndex - 1]?.title || "",
          nextTrackTitle: tracks[currentPlayIndex]?.title || "",
        };
      } else {
        updatedState = {
          prevTrackTitle:
            tracks[currentPlayIndex - 2]?.title ||
            tracks[lastTrackIndex]?.title ||
            "",
          currentPlayTitle: tracks[currentPlayIndex - 1]?.title || "",
          nextTrackTitle: tracks[currentPlayIndex]?.title || "",
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
