import { StyleSheet } from "react-native";
import { Theme } from "@theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Theme.padding.pad3,
    marginVertical: Theme.padding.pad2
  },
  image: {
    height: 270 * Theme.Ratio.H,
  },

  detail: {
    marginTop: Theme.padding.pad4,
    marginBottom: Theme.padding.pad1
  },
  title: {
    fontSize: Theme.fontSize.h1 + Theme.fontSize.p5,
    width: 250 * Theme.Ratio.H,
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
  submitButton: {
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
  },
  radio: {
    paddingTop: Theme.padding.pad6,
    marginLeft: Theme.padding.pad5,
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row"
  },
  radioText: {
    color: Theme.colors.Sirocco,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: Theme.padding.pad0,
    marginRight: Theme.padding.pad4
  }
});

export default styles;
