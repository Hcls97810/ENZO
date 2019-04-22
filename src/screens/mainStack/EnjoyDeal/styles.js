import { StyleSheet } from "react-native";
import { Theme } from "@theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.padding.pad3,
    marginVertical: Theme.padding.pad2
  },
  image: {
    height: 270 * Theme.Ratio.H,
  },

  detail: {
    marginTop: Theme.padding.pad6,
    marginBottom: Theme.padding.pad7
  },
  title: {
    fontSize: Theme.fontSize.h1 + Theme.fontSize.p5,
    color: Theme.colors.Tango,
    fontWeight: "300",
    textAlign: "center",
    alignSelf: "center"
  },
  text: {
    marginTop: Theme.padding.pad0,
    fontSize: Theme.fontSize.p2,
    fontWeight: "300",
    color: Theme.colors.Sirocco,
    textAlign: "center",
    alignSelf: "center"
  },
  takeButton: {
    marginTop: 40 * Theme.Ratio.H,
    marginBottom: 40 * Theme.Ratio.H,
    width: 150 * Theme.Ratio.H,
    alignSelf: "center"
  },
  lineButton: {
    fontWeight: "bold",
    color: Theme.colors.Sirocco,
    borderColor: Theme.colors.Sirocco,
    textAlign: "center",
    alignSelf: "center"
  }
});

export default styles;
