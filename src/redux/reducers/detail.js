import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

const detailSlicer = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload[0];
    },
  },
});

// setpost and setPostDetails can be acces in any files in this project
export const { setDetail } = detailSlicer.actions;

//export the global state/reducers
export default detailSlicer.reducer;
