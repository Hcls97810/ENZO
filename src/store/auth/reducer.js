import * as types from "./actionTypes";

const initialState = {
  isFetching: false,
  user: null,
  error: null,
  location: {},
  city: null
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error
      };
    case types.FORGOT_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.FORGOT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: null
      };
    case types.FORGOT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case types.GET_MY_INFO_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.GET_MY_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: null
      };
    case types.GET_MY_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: action.error
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.LOGOUT_UNAUTHENTICATED: // An authenticated logout attempt (shouldn't happen)
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: null,
        error: null
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default auth;
