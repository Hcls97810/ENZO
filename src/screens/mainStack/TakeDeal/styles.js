import { StyleSheet } from "react-native";
import { Theme } from "@theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Theme.padding.pad3,
    marginVertical: Theme.padding.pad2
  },
  image: {
    width: "100%",
    height: 270 * Theme.Ratio.W,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.padding.pad2,
    justifyContent: "space-between"
  },
  foodTitle: {
    fontSize: Theme.fontSize.h3,
    fontWeight: "bold",
    color: Theme.colors.Tango,
    flex: 1
  },
  star: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1
  },
  food: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  open: {
    color: Theme.colors.Downy,
    fontSize: Theme.fontSize.p5
  },
  detail: {
    marginTop: Theme.padding.pad3
  },
  detailTitle: {
    fontSize: Theme.fontSize.h2,
    color: Theme.colors.Tango,
    fontWeight: "400"
  },
  time: {
    marginTop: Theme.padding.pad0,
    fontSize: Theme.fontSize.h3,
    fontWeight: "300",
    color: Theme.colors.Sirocco
  },
  detailText: {
    marginTop: Theme.padding.pad0,
    fontSize: Theme.fontSize.p3,
    textAlign: "justify",
    color: Theme.colors.Sirocco
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
