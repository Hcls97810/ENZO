import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Theme } from "@theme";

const LineButton = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={[styles.line, props.style]}>
        <Text style={[styles.name, props.style]}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LineButton;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Theme.padding.pad1,
    flexDirection: "row",
    alignSelf: "center"
  },
  name: {
    fontSize: Theme.fontSize.p3,
    paddingBottom: 3 * Theme.Ratio.H
  },
  line: {
    borderBottomWidth: 1
  }
});
