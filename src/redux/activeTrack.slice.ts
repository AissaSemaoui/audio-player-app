import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface activeTrackTypes {
  audioData: activeTrackDataTypes;
  activeId: string;
}

export interface activeTrackDataTypes {
  dataUrl: string;
  coverImg: string;
  id: number;
  metadata: {
    title: string;
    author: string;
    album: string;
  };
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
    playTrack: (
      state: activeTrackTypes,
      action: PayloadAction<activeTrackDataTypes>
    ) => {
      console.log("inside add track : ", state.audioData);
      state.audioData = action.payload;
    },
  },
});

export const { playTrack } = activeTrackSlice.actions;

export default activeTrackSlice;
