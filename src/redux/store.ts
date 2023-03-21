import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./playlist.slice";
import activeTrackSlice from "./activeTrack.slice";
import trackListSlice from "./trackList.slice";

const globalStore = configureStore({
  reducer: {
    activeTrack: activeTrackSlice.reducer,
    playlist: playlistSlice.reducer,
    trackList: trackListSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default globalStore;
