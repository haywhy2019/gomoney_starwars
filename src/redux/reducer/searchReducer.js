import {
    SEARCH_SHIPS_FAIL,
    SEARCH_SHIPS_SUCCESS,
    SEARCH_SHIPS_REQUEST,
    SEARCH_PEOPLE_FAIL,
    SEARCH_PEOPLE_SUCCESS,
    SEARCH_PEOPLE_REQUEST,
    SEARCH_PLANET_FAIL,
    SEARCH_PLANET_SUCCESS,
    SEARCH_PLANET_REQUEST,
  } from "../types";
  
  const initialState = {
    searchPeople: null,
    searchShips: null,
    loading: false,
    error: null,
  };
  
  export const searchPeople = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_PEOPLE_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case SEARCH_PEOPLE_FAIL: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case SEARCH_PEOPLE_SUCCESS: {
        return {
          ...state,
          loading: false,
          searchPeople: action.payload,
        };
      }
      default:
        return state;
    }
  };
  
  export const searchShips = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_SHIPS_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case SEARCH_SHIPS_FAIL: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case SEARCH_SHIPS_SUCCESS: {
        return {
          ...state,
          loading: false,
          searchShips: action.payload,
        };
      }
      default:
        return state;
    }
  };

  export const searchPlanet = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_PLANET_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
      case SEARCH_PLANET_FAIL: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
      case SEARCH_PLANET_SUCCESS: {
        return {
          ...state,
          loading: false,
          searchShips: action.payload,
        };
      }
      default:
        return state;
    }
  };
