import { createSlice } from '@reduxjs/toolkit';

const defaultText = 'Please wait...';

// Actual Slice
export const loadingIndicatorSlice = createSlice({
	name: 'loadingIndicator',
	initialState: {
		open: false,
		text: defaultText,
	},
	reducers: {
		openLoadingIndicator(state, action) {
			state.open = true;
			state.text = action.payload.text || defaultText;
		},
		closeLoadingIndicator(state) {
			state.open = false;
		},
	},
});

export const { closeLoadingIndicator, openLoadingIndicator } =
	loadingIndicatorSlice.actions;

export default loadingIndicatorSlice.reducer;
