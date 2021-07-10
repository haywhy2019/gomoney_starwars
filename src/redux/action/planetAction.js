import {
    GET_PLANET_FAIL,
    GET_PLANET_SUCCESS,
    GET_PLANET_REQUEST,
  } from "../types";
  import { http } from "../../utility/axios";
  
  export const request = () => {
    return {
      type: GET_PLANET_REQUEST,
    };
  };
  
  export const fail = (error) => {
    return {
      type: GET_PLANET_FAIL,
      payload: error,
    };
  };
  
  export const success = (data) => {
    return {
      type: GET_PLANET_SUCCESS,
      payload: data,
    };
  };
  
  export const getPlanet = () => {
    return async function (dispatch) {
      dispatch(request());
      try {
        const response = await http({
          url: "/planets",
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
  