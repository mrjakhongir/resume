import { createSlice } from '@reduxjs/toolkit';
import { Link } from '../lib/definitions';

const initialState: Link[] = [];

const linksSlice = createSlice({
	name: 'links',
	initialState,
	reducers: {
		setLinks: (state, action) => {
			return action.payload || state;
		},
	},
});

export default linksSlice.reducer;
export const { setLinks } = linksSlice.actions;
