import {
    GET_PEOPLE_FAIL,
    GET_PEOPLE_SUCCESS,
    GET_PEOPLE_REQUEST,
  } from "../types";


  const initialState = {
      people: null,
      loading:false,
      error: null
  }

  const peopleReducer = (state = initialState, action) => {
      switch (action.type) {
          case GET_PEOPLE_REQUEST: {
              return {
                  ...state,
                  loading: true
              }

          }
          case GET_PEOPLE_FAIL: {
              return {
                  ...state,
                  loading: false,
                  error: action.payload
              }
          }
          case GET_PEOPLE_SUCCESS: {
              return {
                  ...state,
                  loading: false,
                  people: action.payload
              }
          }
          default:
          return state
      }
  }


  export default peopleReducer