import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers/index';

// creatte the temporary db / state / store
export default configureStore({
	reducer: rootReducers,
	devTools: process.env.NODE_ENV === 'development',
});
