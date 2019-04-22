import { StyleSheet } from "react-native";
import { Theme } from "@theme";

const styles = StyleSheet.create({
  dropDownContainer: {
    marginHorizontal: Theme.padding.pad6,
    marginTop: Theme.padding.pad2
  },
  buttonsContainer: {
    marginTop: Theme.padding.pad2,
    flexDirection: "row",
    paddingHorizontal: Theme.padding.pad3
  },
  mapButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: Theme.padding.pad4,
    borderRadius: Theme.padding.pad2,
    fontSize: Theme.fontSize.p4,
    flexDirection: "row"
  },
  downyColorButton: {
    backgroundColor: Theme.colors.Downy
  },
  greyColorButton: {
    backgroundColor: Theme.colors.Grey
  },
  backButton: {
    padding: Theme.padding.pad1,
    marginBottom: Theme.padding.pad0,
    color: Theme.colors.Tango
  },
  viewListImage: {
    width: Theme.padding.pad2,
    height: Theme.padding.pad2,
    marginRight: Theme.padding.pad0
  },
  mapListImage: {
    width: Theme.padding.pad2,
    height: Theme.padding.pad25,
    marginRight: Theme.padding.pad0
  },
  viewMap: {
    flex: 1,
    marginTop: Theme.padding.pad15
  },
  viewList: {
    flex: 1,
    display: "none"
  }
});

export default styles;
