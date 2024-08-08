import { createSlice } from '@reduxjs/toolkit';
import { Education } from '../lib/definitions';

const initialState: Education[] = [];

const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {
		setEducation: (state, action) => {
			return action.payload;
		},
	},
});

export default educationSlice.reducer;
export const { setEducation } = educationSlice.actions;
