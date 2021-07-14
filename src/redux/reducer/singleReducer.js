import {
  GET_SINGLE_FAIL,
  GET_SINGLE_SUCCESS,
  GET_SINGLE_REQUEST,
} from "../types";

const initialState = {
  single: null,
  loading: false,
  error: null,
};

const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SINGLE_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case GET_SINGLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        single: action.payload,
      };
    }
    default:
      return state;
  }
};

export default singleReducer;
