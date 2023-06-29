import axios from "axios";
import { toast } from "react-toastify";
import { setFlight } from "../reducers/flight";

export const getFlight = (from, to, date) => async (dispatch) => {
  const [startDate, endDate] = date.split(" to ");

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CITY_API}/api/jadwal?date=${startDate}&from=${from}&to=${to}`
    );
    dispatch(setFlight(response.data?.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};
