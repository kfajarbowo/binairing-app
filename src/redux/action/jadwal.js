import axios from "axios";
import { setJadwal } from "../reducers/jadwal";
import { toast } from "react-toastify";

export const getJadwal = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CITY_API}/api/jadwal`
    );
    dispatch(setJadwal(response.data?.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};
