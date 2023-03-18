import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface trackListTypes {
  value: trackTypes[];
}

export interface trackTypes {
  dataUrl: string;
  coverImg: string;
  id: number;
  metadata: {
    title: string;
    author: string;
    album: string;
  };
}

const trackListSlice = createSlice({
  name: "trackList",
  initialState: {
    value: [],
  } as trackListTypes,
  reducers: {
    addNewTrack: (state: trackListTypes, action: PayloadAction<trackTypes>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addNewTrack } = trackListSlice.actions;

export default trackListSlice;
