import { StyleSheet } from "react-native";
import { Theme, Images } from "@theme";

export default (styles = StyleSheet.create({
  keyboardcontainer: {
    flex: 1
  },
  container: {
    paddingHorizontal: Theme.padding.pad4
  },
  logoImage: {
    width: 203 * Theme.Ratio.H,
    height: 85 * Theme.Ratio.H,
    alignSelf: "center",
    marginTop: 120 * Theme.Ratio.H
  },
  signupTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  signupText: {
    color: Theme.colors.White,
    marginBottom: 3 * Theme.Ratio.H,
    fontSize: Theme.fontSize.p3
  },
  forgotButton: {
    color: Theme.colors.White,
    paddingVertical: Theme.padding.pad0,
    paddingHorizontal: Theme.padding.pad1
  }
}));
