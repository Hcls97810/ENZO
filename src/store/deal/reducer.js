import * as types from "./actionTypes";

const initialState = {
  isFetching: false,
  deals: null,
  dealcategory: null,
  error: null
};

const deal = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_DEAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case types.GET_ALL_DEAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        deals: action.payload,
        error: null
      };
    case types.GET_ALL_DEAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case types.FETCH_DEAL_REQUEST:
      return {
        ...state,
        isFetching: true,
        deals: null,
        error: null
      };
    case types.FETCH_DEAL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        deals: action.payload,
        error: null
      };
    case types.FETCH_DEAL_FAILURE:
      return {
        ...state,
        isFetching: false,
        deals: null,
        error: action.error
      };
    case types.FETCH_DEAL_CATEGORY_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case types.FETCH_DEAL_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dealcategory: action.payload
      }
    case types.FETCH_DEAL_CATEGORY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state;
  }
};

export default deal;
