import {
    GET_SHIPS_FAIL,
    GET_SHIPS_SUCCESS,
    GET_SHIPS_REQUEST,
  } from "../types";
  import { http } from "../../utility/axios";
  
  export const request = () => {
    return {
      type: GET_SHIPS_REQUEST,
    };
  };
  
  export const fail = (error) => {
    return {
      type: GET_SHIPS_FAIL,
      payload: error,
    };
  };
  
  export const success = (data) => {
    return {
      type: GET_SHIPS_SUCCESS,
      payload: data,
    };
  };
  
  export const getShips = (page) => {
    return async function (dispatch) {
      dispatch(request());
      try {
        const response = await http({
          url: `/starships/?page=${page}`,
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
  

  export default getShips