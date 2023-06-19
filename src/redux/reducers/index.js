import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import city from './city';

export default combineReducers({
	authTable: auth,
	cityTable: city,
	// post
	// auth
});
