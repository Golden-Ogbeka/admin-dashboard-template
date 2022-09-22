import { createSlice } from '@reduxjs/toolkit';

// Actual Slice
export const alertSlice = createSlice({
	name: 'alert',
	initialState: {
		open: false,
		message: 'Alert',
		type: 'info',
	},
	reducers: {
		openAlert(state, action) {
			state.open = true;
			state.message = action.payload.message;
			state.type = action.payload.type || 'info';
		},
		closeAlert(state) {
			state.open = false;
		},
	},
});

export const { closeAlert, openAlert } = alertSlice.actions;

export default alertSlice.reducer;
