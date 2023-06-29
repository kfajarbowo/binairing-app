import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flight: [],
};

const setFlightSlicer = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlight: (state, action) => {
      state.flight = action.payload;
    },
  },
});

// setpost and setPostDetails can be acces in any files in this project
export const { setFlight } = setFlightSlicer.actions;

//export the global state/reducers
export default setFlightSlicer.reducer;
