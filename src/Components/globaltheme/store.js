


import { configureStore } from "@reduxjs/toolkit";
import  themeSlice from "../globaltheme/themeSilce"

const store = configureStore({
  reducer: {
    theme:  themeSlice,
  },
});

export default store;
