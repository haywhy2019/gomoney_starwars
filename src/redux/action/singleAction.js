import {
    GET_SINGLE_FAIL,
    GET_SINGLE_SUCCESS,
    GET_SINGLE_REQUEST,
  } from "../types";
  import { http } from "../../utility/axios";
  
  export const request = () => {
    return {
      type: GET_SINGLE_REQUEST,
    };
  };
  
  export const fail = (error) => {
    return {
      type: GET_SINGLE_FAIL,
      payload: error,
    };
  };
  
  export const success = (data) => {
    return {
      type: GET_SINGLE_SUCCESS,
      payload: data,
    };
  };
  
  export const getSingle = (id,type) => {
      console.log(type,"typekkkk")
    return async function (dispatch) {
      dispatch(request());
      try {
          let response
          if(type == "people"){
            response = await http({
                url: `/people/${id}/`,
                method: "get",
              });
          } else {
            response = await http({
                url: `/starships/${id}/`,
                method: "get",
              });
          }
       
        console.log(response,"response")
        dispatch(success(response));
      } catch (err) {
        const errRes = err.message;
        dispatch(fail(errRes));
      }
    };
  };
  

  export default getSingle