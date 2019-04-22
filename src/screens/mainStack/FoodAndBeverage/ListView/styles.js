import { StyleSheet } from "react-native";
import { Theme } from "@theme";

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    borderTopColor: Theme.colors.Grey,
    borderTopWidth: Theme.padding.pad1,
    marginTop: Theme.padding.pad15,
    marginBottom: Theme.padding.pad2,
    backgroundColor: Theme.colors.White
  },
  list: {
    marginLeft: Theme.padding.pad3,
    marginRight: Theme.padding.pad3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
