import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Theme } from "@theme";

const BaseScreen = (props) => {
  return (
    <LinearGradient
      colors={[Theme.colors.Tango, Theme.colors.PersianRed]}
      style={{ flex: 1 }}
    >
      {props.children}
    </LinearGradient>
  )
}

export default BaseScreen;