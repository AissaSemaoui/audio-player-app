import { createSlice } from "@reduxjs/toolkit";

interface playlistTypes {
  value: any[];
}

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    value: [],
  } as playlistTypes,
  reducers: {
    addTrack: (state, action) => {},
  },
});

export default playlistSlice;
