import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	fName: '',
	lName: '',
	email: '',
	phone: '',
	address: '',
	jobTitle: '',
};

const userInfoSlice = createSlice({
	name: 'userInfo',
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			return action.payload || state;
		},
	},
});

export default userInfoSlice.reducer;
export const { setUserInfo } = userInfoSlice.actions;
