import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	city: [],
};

const citySlicer = createSlice({
	name: 'city',
	initialState,
	reducers: {
		setCity: (state, action) => {
			state.city = action.payload;
		},
	},
});

// setpost and setPostDetails can be acces in any files in this project
export const { setCity } = citySlicer.actions;

//export the global state/reducers
export default citySlicer.reducer;
