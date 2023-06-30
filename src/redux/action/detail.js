import axios from "axios";
import { toast } from "react-toastify";
import { setDetail } from "../reducers/detail";

export const getDetail = (from, to, kelas, date) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CITY_API}/api/jadwal?date=${date}&from=${from}&to=${to}&class=${kelas}`
    );

    dispatch(setDetail(response.data?.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};
