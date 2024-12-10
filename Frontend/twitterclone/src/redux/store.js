import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const store = configureStore({
  reducer: {
    //actions
    user:userReducer
  },
});
export default store;
