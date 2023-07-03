import axios from "axios";

export const ADD_BOOKING = "ADD_BOOKING";
export const GET_BOOKING = "GET_BOOKING";
export const GET_ALL_BOOKING = "GET_ALL_BOOKING";

export const addBooking = (data, token) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_BOOKING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    return axios({
      method: "POST",
      url: "https://final-project-binar-production-d8b5.up.railway.app/api/booking",
      timeout: 120000,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // success get api
        console.log("success new add booking");
        dispatch({
          type: ADD_BOOKING,
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
        console.log("failed new add booking");
        dispatch({
          type: ADD_BOOKING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getBooking = (token, id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_BOOKING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    return axios({
      method: "GET",
      url: `https://final-project-binar-production-d8b5.up.railway.app/api/booking/${id}`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // success get api
        console.log("success get booking");
        dispatch({
          type: GET_BOOKING,
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
        console.log("failed get booking");
        dispatch({
          type: GET_BOOKING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getAllBooking = (token) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_ALL_BOOKING,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    return axios({
      method: "GET",
      url: `https://final-project-binar-production-d8b5.up.railway.app/api/user/order`,
      timeout: 120000,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        // success get api
        console.log("success get booking");
        dispatch({
          type: GET_ALL_BOOKING,
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
        console.log("failed get booking");
        dispatch({
          type: GET_ALL_BOOKING,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
