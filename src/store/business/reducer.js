import * as types from "./actionTypes";

const initialState = {
  isFetching: false,
  user: null,
  error: null
};

const business = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_BUSINESS_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: null,
        error: null
      };
    case types.GET_ALL_BUSINESS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: null
      };
    case types.GET_ALL_BUSINESS_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error
      };
    case types.FETCH_BUSINESS_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: null,
        error: null
      };
    case types.FETCH_BUSINESS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: null
      };
    case types.FETCH_BUSINESS_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error
      };
    default:
      return state;
  }
};

export default business;
