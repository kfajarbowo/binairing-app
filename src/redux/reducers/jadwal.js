import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jadwal: [],
};

const jadwalSlicer = createSlice({
  name: "jadwal",
  initialState,
  reducers: {
    setJadwal: (state, action) => {
      state.jadwal = action.payload;
    },
  },
});
export const { setJadwal } = jadwalSlicer.actions;

export default jadwalSlicer.reducer;
