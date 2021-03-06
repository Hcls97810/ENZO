import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default (styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.padding.pad4
  },
  logoBigText: {
    marginTop: 200 * Theme.Ratio.H,
    textAlign: "center",
    fontSize: 30 * Theme.Ratio.H,
    color: Theme.colors.White,
    alignSelf: "center"
  },
  lineButton: {
    fontWeight: "bold",
    color: Theme.colors.White,
    borderColor: Theme.colors.White,
    textAlign: "center",
    alignSelf: "center"
  }
}));
