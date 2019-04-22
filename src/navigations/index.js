import React from "react";
import AppContainer from "./appNavigator";

export default class AppNavigation extends React.Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}
