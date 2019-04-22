import { StyleSheet } from "react-native";
import { Theme } from "@theme";

export default (styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.padding.pad4
  },
  logoBigText: {
    marginTop: 120 * Theme.Ratio.H,
    textAlign: "center",
    fontSize: 40 * Theme.Ratio.H,
    color: Theme.colors.White,
    alignSelf: "center"
  },
  logoSmallText: {
    textAlign: "center",
    fontSize: Theme.fontSize.p3,
    alignSelf: "center",
    color: Theme.colors.White
  },
  nextButton: {
    marginBottom: 60 * Theme.Ratio.H,
    width: 150 * Theme.Ratio.H,
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
