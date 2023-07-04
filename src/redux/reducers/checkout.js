import { ADD_BOOKING, GET_BOOKING, GET_ALL_BOOKING } from "../action/checkout";

const intitialState = {
  addBookingResult: false,
  addBookingLoading: false,
  addBookingError: false,

  getBookingResult: false,
  getBookingLoading: false,
  getBookingError: false,

  getAllBookingResult: false,
  getAllBookingLoading: false,
  getAllBookingError: false,
};

const booking = (state = intitialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        addBookingResult: action.payload.data,
        addBookingLoading: action.payload.loading,
        addBookingError: action.payload.errorMessage,
      };

    case GET_BOOKING:
      return {
        ...state,
        getBookingResult: action.payload.data,
        getBookingLoading: action.payload.loading,
        getBookingError: action.payload.errorMessage,
      };

    case GET_ALL_BOOKING:
      return {
        ...state,
        getAllBookingResult: action.payload.data,
        getAllBookingLoading: action.payload.loading,
        getAllBookingError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default booking;
