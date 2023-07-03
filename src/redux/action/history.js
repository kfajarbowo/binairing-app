import axios from 'axios';
import { toast } from 'react-toastify';
import { setHistory, setHistoryDetails } from '../reducers/history';

export const getHistory = () => async (dispatch, getState) => {
	try {
		const { token } = getState().authTable;
		const response = await axios.get(
			`${process.env.REACT_APP_CITY_API}/api/user/order`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		dispatch(setHistory(response?.data));
		// const { data } = response;
		// dispatch(setHistory(data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error?.response?.data?.message);
			return;
		}
		toast.error(error.message);
	}
};

export const getHistoryDetails = bookingId => async (dispatch, getState) => {
	try {
		const { token } = getState().authTable;
		const response = await axios.get(
			`${process.env.REACT_APP_CITY_API}/api/booking/${bookingId}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		dispatch(setHistoryDetails(response?.data));
		// const { data } = response;
		// dispatch(setHistory(data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error?.response?.data?.message);
			return;
		}
		toast.error(error.message);
	}
};
