import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface playlistTypes {
  active: File[];
}

const playlistSlice = createSlice({
  name: "activePlaylist",
  initialState: {
    active: [],
  } as playlistTypes,
  reducers: {
    setActivePlaylist: (state: playlistTypes, action) => {
      console.log(state, action);
      state = action.payload;
    },
    addNewAudio: (state: playlistTypes, action: PayloadAction<File>) => {
      console.log(state.active);
      console.log(action.payload);
      state.active.push(action.payload);
    },
  },
});

export const { setActivePlaylist, addNewAudio } = playlistSlice.actions;

export default playlistSlice;
