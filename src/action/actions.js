import axios from "axios";

// Action Types
export const FETCH_TABLE_DATA_REQUEST = "FETCH_TABLE_DATA_REQUEST";
export const FETCH_TABLE_DATA_SUCCESS = "FETCH_TABLE_DATA_SUCCESS";
export const FETCH_TABLE_DATA_FAILURE = "FETCH_TABLE_DATA_FAILURE";
export const SUBMIT_FORM_REQUEST = "SUBMIT_FORM_REQUEST";
export const SUBMIT_FORM_SUCCESS = "SUBMIT_FORM_SUCCESS";
export const SUBMIT_FORM_FAILURE = "SUBMIT_FORM_FAILURE";

// Action Creators
export const fetchTableData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_TABLE_DATA_REQUEST });

    axios
      .get("http://localhost:8000/items")
      .then((response) => {
        dispatch({
          type: FETCH_TABLE_DATA_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_TABLE_DATA_FAILURE,
          payload: error.message,
        });
      });
  };
};

export const submitForm = (formData) => {
  return (dispatch) => {
    dispatch({ type: SUBMIT_FORM_REQUEST });

    axios
      .post("http://localhost:8000/submit", formData)
      .then((response) => {
        dispatch({
          type: SUBMIT_FORM_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SUBMIT_FORM_FAILURE,
          payload: error.message,
        });
      });
  };
};
