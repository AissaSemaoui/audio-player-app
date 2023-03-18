import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface uploadedTracksTypes {
  value: trackTypes[];
}

interface trackTypes {
  dataUrl: "";
  coverImg: "";
  id: "";
  metadata: {
    title: "";
    author: "";
    album: "";
  };
}

const uploadedTracksSlice = createSlice({
  name: "uploadedTracks",
  initialState: {
    value: [],
  } as uploadedTracksTypes,
  reducers: {
    setUploadedTracks: (
      state: uploadedTracksTypes,
      action: PayloadAction<uploadedTracksTypes>
    ) => {
      state = action.payload;
    },
  },
});

export const { setUploadedTracks } = uploadedTracksSlice.actions;

export default uploadedTracksSlice;
