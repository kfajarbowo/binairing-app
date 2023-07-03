import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import city from './city';
import jadwal from './jadwal';
import flight from './flight';
import promo from './promotion';
import detail from './detail';
import history from './history';

export default combineReducers({
	authTable: auth,
	cityTable: city,
	jadwalTable: jadwal,
	flightTable: flight,
	promoTable: promo,
	detailTable: detail,
	historyTable: history,
});
