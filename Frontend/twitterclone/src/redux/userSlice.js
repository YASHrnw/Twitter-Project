import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    otherUser: null,
    profile:null
  },
  reducers: {
    //multipel Slice
    getUser: (state, action) => {
      console.log("Payload in getUser reducer:", action.payload);
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    getMyProfile:(state,action)=>{
      state.profile=action.payload
    }
  },
});

export const { getUser, getOtherUser ,getMyProfile} = userSlice.actions;
export default userSlice.reducer;
