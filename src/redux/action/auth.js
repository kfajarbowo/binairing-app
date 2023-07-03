import axios from 'axios';
import { toast } from 'react-toastify';
import { setIsLoggedIn, setToken, setUser } from '../reducers/auth';

export const login = (data, navigate) => async (dispatch) => {
	try {
	  const response = await axios.post(
		`${process.env.REACT_APP_AUTH_API}/api/auth/signin`,
		data, 
		{
			'Content-Type': 'application/json',
	  	});
	  const { accessToken } = response?.data;
  
	  dispatch(setToken(accessToken));
	  dispatch(setIsLoggedIn(true));
  
	  // Redirect to home page
	  navigate('/');
	} catch (error) {
	  if (axios.isAxiosError(error)) {
		toast.error(error?.response?.data?.message);
		return;
	  }
  
	  toast.error(error.message);
	}
  };

export const register = (data, navigate) => async (dispatch) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_AUTH_API}/api/auth/signup`,
			data,
			{
		  		'Content-Type': 'application/json',
			});

		// Redirect to the home page
		navigate('/login');
	  } catch (error) {
		if (axios.isAxiosError(error)) {
		  console.log(error.response); // Log the error response for debugging
		  toast.error(error?.response?.data?.message);
		} else {
		  toast.error(error.message);
		}
	  }
	};

export const logout = navigate => async dispatch => {
	dispatch(setToken(null));
	dispatch(setIsLoggedIn(false));
	dispatch(setUser(null));

	if (navigate) navigate('/login');
};

export const getProfile = () => async (dispatch, getState) => {
	try {
		const { token } = getState().authTable;
		const response = await axios.get(
			`${process.env.REACT_APP_AUTH_API}/api/user`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		const { data } = response;
		dispatch(setUser(data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			toast.error(error?.response?.data?.message);
			if (error.response.status === 401) {
				dispatch(logout());
			}
			return;
		}
		toast.error(error.message);
	}
}