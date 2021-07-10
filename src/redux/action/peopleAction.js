import {
  GET_PEOPLE_FAIL,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_REQUEST,
} from "../types";
import { http } from "../../utility/axios";

export const request = () => {
  return {
    type: GET_PEOPLE_REQUEST,
  };
};

export const fail = (error) => {
  return {
    type: GET_PEOPLE_FAIL,
    payload: error,
  };
};

export const success = (data) => {
  return {
    type: GET_PEOPLE_SUCCESS,
    payload: data,
  };
};

export const getPeople = () => {
  return async function (dispatch) {
    dispatch(request());
    try {
      const response = await http({
        url: "/people",
        method: "get",
      });
      console.log(response,"response")
      dispatch(success(response));
    } catch (err) {
      const errRes = err.message;
      dispatch(fail(errRes));
    }
  };
};
