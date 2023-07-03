import axios from "axios";

export const ADD_PAYMENT = "ADD_PAYMENT";

export const addPayment = (token, idBooking) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_PAYMENT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    return axios({
      method: "PUT",
      url: `https://final-project-binar-production-d8b5.up.railway.app/api/booking/${idBooking}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // success get api
        console.log("success add payment");
        dispatch({
          type: ADD_PAYMENT,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })

      .catch((error) => {
        // failed get api
        console.log(error.message);
        console.log("failed add payment");
        dispatch({
          type: ADD_PAYMENT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
