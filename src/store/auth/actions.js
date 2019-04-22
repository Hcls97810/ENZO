import { AsyncStorage, Alert } from "react-native";
import * as types from "./actionTypes";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

export function register(userInfo) {
  return dispatch => {
    dispatch({ type: types.SIGNUP_REQUEST, payload: userInfo });
    axios
      .post("/signup/", userInfo)
      .then(res => {
        AsyncStorage.setItem("@token", res.data.data.token);
        dispatch({ type: types.SIGNUP_SUCCESS });
        dispatch(getmyinfo(res.data.data.token));
      })
      .catch(err => {
        Alert.alert("This email is used by other");
        dispatch({ type: types.SIGNUP_FAILURE, error: err });
      });
  };
}

export function login(userInfo) {
  return dispatch => {
    dispatch({ type: types.LOGIN_REQUEST, payload: userInfo });
    axios
      .post("/me/token/", userInfo)
      .then(res => {
        AsyncStorage.setItem("@token", res.data.token);
        dispatch({ type: types.LOGIN_SUCCESS, payload: res });
        dispatch(getmyinfo(res.data.token));
      })
      .catch(err => {
        Alert.alert("Account does not exist");
        dispatch({ type: types.LOGIN_FAILURE, error: err });
      });
  };
}

export function getmyinfo(token) {
  return async dispatch => {
    dispatch({ type: types.GET_MY_INFO_REQUEST });

    if (token === null) {
      dispatch({ type: types.GET_MY_INFO_FAILURE, error: "" });
    }
    axios
      .get("/me/", { headers: { Authorization: `Token ${token}` } })
      .then(res => {
        dispatch({ type: types.GET_MY_INFO_SUCCESS, payload: res.data.data });
      })
      .catch(err => {
        dispatch({ type: types.GET_MY_INFO_FAILURE, error: "" });
      });
  };
}

export function forgotPassword(userInfo) {
  return async dispatch => {
    dispatch({ type: types.FORGOT_REQUEST, payload: userInfo });
    axios
      .post("/signin/send-reset-email/", userInfo)
      .then(res => {
        alert("Password reset instructions sent your email.");
        dispatch({ type: types.FORGOT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: types.FORGOT_FAILURE, error: err });
      });
  };
}

export function logout() {
  return async dispatch => {
    dispatch({ type: types.LOGOUT_REQUEST });
    const token = await AsyncStorage.getItem("@token");
    if (!token) {
      return dispatch({ type: types.LOGOUT_UNAUTHENTICATED });
    }
    AsyncStorage.removeItem("@token");
    dispatch({ type: types.LOGOUT_SUCCESS });
  };
}

export function phoneVerify(verifyInfo) {
  return async dispatch => {
    dispatch({ type: types.PHONE_VERIFY_REQUEST });
    const token = await AsyncStorage.getItem("@token");

    axios
      .post("/signup/verify/", verifyInfo)
      .then(res => {
        dispatch(getmyinfo(token));

        dispatch({ type: types.PHONE_VERIFY_SUCCESS, payload: res.data });
      })
      .catch(err => {
        alert('Invalid pin code')
        dispatch({ type: types.FORGOT_FAILURE, error: err });
      });
  };
}