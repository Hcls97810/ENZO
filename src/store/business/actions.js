import { AsyncStorage } from "react-native";
import * as types from "./actionTypes";
import axios from "axios";

export function getAllBusiness() {
  return async dispatch => {
    dispatch({ type: types.GET_ALL_BUSINESS_REQUEST });

    const token = await AsyncStorage.getItem("@token");
    if (token === null) {
      dispatch({ type: types.GET_ALL_BUSINESS_FAILURE, error: "" });
    }
    const config = {
      url: "/me/",
      method: "get",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch({
          type: types.GET_ALL_BUSINESS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.GET_ALL_BUSINESS_FAILURE,
          error: err.response
        });
      });
  };
}

export function fetchBusiness(id) {
  return async dispatch => {
    dispatch({ type: types.FETCH_BUSINESS_REQUEST });

    const token = await AsyncStorage.getItem("@token");
    if (token === null) {
      dispatch({ type: types.FETCH_BUSINESS_FAILURE, error: "" });
    }
    const config = {
      url: `/business/${id}/`,
      method: "get",
      headers: {
        Authorization: `Token ${token}`
      }
    };
    axios
      .request(config)
      .then(res => {
        dispatch({
          type: types.FETCH_BUSINESS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: types.FETCH_BUSINESS_FAILURE,
          error: err.response
        });
      });
  };
}
