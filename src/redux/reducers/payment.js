import { ADD_PAYMENT } from "../action/payment";

const intitialState = {
  addPaymentResult: false,
  addPaymentLoading: false,
  addPaymentError: false,
};

const payment = (state = intitialState, action) => {
  switch (action.type) {
    case ADD_PAYMENT:
      return {
        ...state,
        addPaymentResult: action.payload.data,
        addPaymentLoading: action.payload.loading,
        addPaymentError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default payment;
