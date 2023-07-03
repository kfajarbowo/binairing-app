import axios from "axios";
import { toast } from "react-toastify";
import { setPromo } from "../reducers/promotion";

export const getPromo = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_CITY_API}/api/jadwal`
    );
    dispatch(setPromo(response.data?.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error.message);
  }
};
