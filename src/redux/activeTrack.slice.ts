import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface activeTrackTypes {
  audioData: trackDataTypes;
  activeId: string;
}

interface trackDataTypes {
  dataUrl: string;
  coverImg: string;
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
      metadata: {
        title: "",
        author: "",
        album: "",
      },
    },
  } as activeTrackTypes,
  reducers: {
    addTrack: (state, action: PayloadAction<trackDataTypes>) => {
      console.log("inside add track : ", state.audioData);
      state.audioData = action.payload;
    },
  },
});

export const { addTrack } = activeTrackSlice.actions;

export default activeTrackSlice;
