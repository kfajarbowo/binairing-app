import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	history: [],
	historyDetails: [],
};

const historySlicer = createSlice({
	name: 'history',
	initialState,
	reducers: {
		setHistory: (state, action) => {
			state.history = action.payload;
		},
		setHistoryDetails: (state, action) => {
			state.historyDetails = action.payload;
		},
	},
});

// setpost and setPostDetails can be acces in any files in this project
export const { setHistory, setHistoryDetails } = historySlicer.actions;

//export the global state/reducers
export default historySlicer.reducer;
