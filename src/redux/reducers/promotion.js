import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promo: [],
};

const promoSlicer = createSlice({
  name: "promo",
  initialState,
  reducers: {
    setPromo: (state, action) => {
      state.promo = action.payload;
    },
  },
});

// setpost and setPostDetails can be acces in any files in this project
export const { setPromo } = promoSlicer.actions;

//export the global state/reducers
export default promoSlicer.reducer;
