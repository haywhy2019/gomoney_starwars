import {
    SEARCH_PEOPLE_FAIL,
    SEARCH_PEOPLE_SUCCESS,
    SEARCH_PEOPLE_REQUEST,
    SEARCH_SHIPS_FAIL,
    SEARCH_SHIPS_SUCCESS,
    SEARCH_SHIPS_REQUEST,
  } from "../types";
  import { http } from "../../utility/axios";
  
  export const requestShips = () => {
    return {
      type: SEARCH_SHIPS_REQUEST,
    };
  };
  
  export const failShips = (error) => {
    return {
      type: SEARCH_SHIPS_FAIL,
      payload: error,
    };
  };
  
  export const successShips = (data) => {
    return {
      type: SEARCH_SHIPS_SUCCESS,
      payload: data,
    };
  };



  export const requestPeople = () => {
    return {
      type: SEARCH_PEOPLE_REQUEST,
    };
  };
  
  export const failPeople = (error) => {
    return {
      type: SEARCH_PEOPLE_FAIL,
      payload: error,
    };
  };
  
  export const successPeople = (data) => {
    return {
      type: SEARCH_PEOPLE_SUCCESS,
      payload: data,
    };
  };
  
  export const searchPeople = (search) => {
    return async function (dispatch) {
      dispatch(requestPeople());
      try {
        const response = await http({
          url: `/people/?search=${search}`,
          method: "get",
        });
        dispatch(successPeople(response));
      } catch (err) {
        const errRes = err.message;
        dispatch(failPeople(errRes));
      }
    };
  };
  
  
  export const searchShips = (search) => {
    return async function (dispatch) {
      dispatch(requestShips());
      try {
        const response = await http({
          url:  `/starships/?search=${search}`,
          method: "get",
        });
        dispatch(successShips(response));
      } catch (err) {
        const errRes = err.message;
        dispatch(failShips(errRes));
      }
    };
  };
  