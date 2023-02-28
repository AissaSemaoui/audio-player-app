import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./reducers";

const globalStore = configureStore({
  reducer: {
    activePlaylist: playlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default globalStore;
