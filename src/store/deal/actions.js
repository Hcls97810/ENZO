import { AsyncStorage } from "react-native";
import * as types from "./actionTypes";
import axios from "axios";
import { getmyinfo } from '../auth';

export function getAllDeal() {
  return async dispatch => {
    dispatch({ type: types.GET_ALL_DEAL_REQUEST });
    const token = await AsyncStorage.getItem("@token");
    if (token === null) {
      dispatch({ type: types.GET_ALL_DEAL_FAILURE, error: "" });
    }
    const config = {
      url: "/deal/",
      method: "get",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch({
          type: types.GET_ALL_DEAL_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_ALL_DEAL_FAILURE,
          error: err.response
        });
      });
  };
}

export function fetchDeal(id) {
  return async dispatch => {
    dispatch({ type: types.FETCH_DEAL_REQUEST });

    const token = await AsyncStorage.getItem("@token");
    if (token === null) {
      dispatch({ type: types.FETCH_DEAL_FAILURE, error: "" });
    }
    const config = {
      url: `/deal/${id}/`,
      method: "get",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch({
          type: types.FETCH_DEAL_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_DEAL_FAILURE,
          error: err.response
        });
      });
  };
}

export function getAllDealcategory() {
  return async dispatch => {
    dispatch({ type: types.FETCH_DEAL_CATEGORY_REQUEST });
    const token = await AsyncStorage.getItem("@token");
    const config = {
      url: `/dealcategory/`,
      method: "get",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch({
          type: types.FETCH_DEAL_CATEGORY_SUCCESS,
          payload: res.data.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_DEAL_CATEGORY_FAILURE,
          error: err.response
        });
      });
  }
}

export function takeDeal(dealId) {
  return async dispatch => {
    dispatch({ type: types.TAKE_DEAL_REQUEST });
    const token = await AsyncStorage.getItem("@token");
    const config = {
      url: `/deal/${dealId}/subscribe/`,
      method: "post",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch(getAllDeal());
        dispatch({
          type: types.TAKE_DEAL_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: types.TAKE_DEAL_FAILURE,
          error: err.response
        });
      });
  }
}

export function cancelDeal(dealId) {
  return async dispatch => {
    dispatch({ type: types.TAKE_DEAL_REQUEST });
    const token = await AsyncStorage.getItem("@token");
    const config = {
      url: `/deal/${dealId}/cancell/`,
      method: "post",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch(getmyinfo(token));
        dispatch(getAllDeal(token));
        dispatch({
          type: types.TAKE_DEAL_SUCCESS
        });
      })
      .catch(err => {
        dispatch({
          type: types.TAKE_DEAL_FAILURE,
          error: err.response
        });
      });
  }
}