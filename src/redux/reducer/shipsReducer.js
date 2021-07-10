import {
    GET_SHIPS_FAIL,
    GET_SHIPS_SUCCESS,
    GET_SHIPS_REQUEST,
  } from "../types";


  const initialState = {
      ships: null,
      loading:false,
      error: null
  }

  const shipsReducer = (state = initialState, action) => {
      switch (action.type) {
          case GET_SHIPS_REQUEST: {
              return {
                  ...state,
                  loading: true
              }

          }
          case GET_SHIPS_FAIL: {
              return {
                  ...state,
                  loading: false,
                  error: action.payload
              }
          }
          case GET_SHIPS_SUCCESS: {
              return {
                  ...state,
                  loading: false,
                  ships: action.payload
              }
          }
          default:
          return state
      }
  }


  export default shipsReducer