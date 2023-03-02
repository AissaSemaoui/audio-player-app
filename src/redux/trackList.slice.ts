import { createSlice } from "@reduxjs/toolkit";

const trackListSlice = createSlice({
  name: "trackList",
  initialState: {
    value: [],
  },
  reducers: {
    addTrack: (state, action) => {
      console.log("");
    },
  },
});

export default trackListSlice;
