import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
import authReducer from "./authSlice"
const store = configureStore({
  reducer: {
    auth: authSlice,
    auth : authReducer
    // TODO : ADD MORE SLICES HERE FOR POSTS
  },
});

export default store;
