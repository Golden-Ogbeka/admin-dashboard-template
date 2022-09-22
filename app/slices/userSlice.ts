import { createSlice } from '@reduxjs/toolkit';

// Actual Slice
export const userSlice = createSlice({
	name: 'user',
	initialState: {
		authenticated: false,
	},
	reducers: {
		authenticateUser(state) {
			state.authenticated = true;
		},
		logoutUser(state) {
			state.authenticated = false;
		},
	},
});

export const { authenticateUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
