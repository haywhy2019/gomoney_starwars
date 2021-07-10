import {
    GET_PLANET_FAIL,
    GET_PLANET_SUCCESS,
    GET_PLANET_REQUEST,
  } from "../types"


  const initialState = {
      planet: null,
      loading:false,
      error: null
  }

  const planetReducer = (state = initialState, action) => {
      switch (action.type) {
          case GET_PLANET_REQUEST: {
              return {
                  ...state,
                  loading: true
              }

          }
          case GET_PLANET_FAIL: {
              return {
                  ...state,
                  loading: false,
                  error: action.payload
              }
          }
          case GET_PLANET_SUCCESS: {
              return {
                  ...state,
                  loading: false,
                  planet: action.payload
              }
          }
          default:
          return state
      }
  }


  export default planetReducer