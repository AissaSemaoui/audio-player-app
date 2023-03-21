import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { trackTypes } from "./trackList.slice";

export interface activeTrackTypes {
  audioData: trackTypes;
  activeId: string;
}

const activeTrackSlice = createSlice({
  name: "activeTrack",
  initialState: {
    activeId: "",
    audioData: {
      dataUrl: "",
      coverImg: "",
      id: 0,
      metadata: {
        title: "",
        author: "",
        album: "",
      },
    },
  } as activeTrackTypes,
  reducers: {
    playTrack: (state: activeTrackTypes, action: PayloadAction<trackTypes>) => {
      console.log("inside add track : ", state);

      let updatedState: any = {};
      updatedState.audioData = action.payload;
      console.log("update state : ", updatedState);
      return {
        ...state,
        ...updatedState,
      };
    },
  },
});

export const { playTrack } = activeTrackSlice.actions;

export default activeTrackSlice;
