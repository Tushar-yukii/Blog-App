import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // TODO : ADD MORE SLICES HERE FOR POSTS
  },
});

export default store;
