import React from "react";
import AppNavigation from "./src/navigations";
import axios from "axios";
import { Provider } from "react-redux";
import SplashScreen from "react-native-smart-splash-screen";

import { configureStore } from "./src/store";

const store = configureStore();

axios.defaults.baseURL = "https://admin.enzo-app.com/api";

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 800,
      delay: 200
    });
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
