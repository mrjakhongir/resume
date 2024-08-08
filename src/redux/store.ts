import { configureStore } from '@reduxjs/toolkit';
import userInfoSlice from './userInfoSlice';
import linksSlice from './linksSlice';

const store = configureStore({
	reducer: {
		userInfo: userInfoSlice,
		links: linksSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
