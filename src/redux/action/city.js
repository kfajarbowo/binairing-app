import axios from 'axios';
import { toast } from 'react-toastify';
import { setCity } from '../reducers/city';

export const getCity = () => async dispatch => {
	try {
		const response = await axios.get(
			`${process.env.REACT_APP_CITY_API}/api/city`
		);
		dispatch(setCity(response.data?.data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error?.response?.data?.message);
			return;
		}
		toast.error(error.message);
	}
};
