import {
    FETCH_TABLE_DATA_REQUEST,
    FETCH_TABLE_DATA_SUCCESS,
    FETCH_TABLE_DATA_FAILURE,
    SUBMIT_FORM_REQUEST,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILURE
  } from '../action/actions';
  
  // Initial State
  const initialState = {
    users: [],
    loading: false,
    error: ''
  };
  
  // Reducer
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TABLE_DATA_REQUEST:
      case SUBMIT_FORM_REQUEST:
        return {
          ...state,
          loading: true,
          error: ''
        };
      case FETCH_TABLE_DATA_SUCCESS:
        return {
          ...state,
          users: action.payload.users,
          loading: false,
          error: ''
        };
      case FETCH_TABLE_DATA_FAILURE:
      case SUBMIT_FORM_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case SUBMIT_FORM_SUCCESS:
        return {
          ...state,
          loading: false,
          error: ''
        };
      default:
        return state;
    }
  };
  