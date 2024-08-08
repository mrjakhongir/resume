import { configureStore } from '@reduxjs/toolkit';
import userInfoSlice from './userInfoSlice';
import linksSlice from './linksSlice';
import educationSlice from './educationSlice';

const store = configureStore({
	reducer: {
		userInfo: userInfoSlice,
		links: linksSlice,
		education: educationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
