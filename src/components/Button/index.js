import React from "react";
import { Card } from "native-base";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Theme } from "@theme";

const _Button = props => {
  let backgroundColor = props.backgroundColor
    ? props.backgroundColor
    : "#62C9BF";
  return (
    <TouchableOpacity {...props}>
      <Card style={[styles.container, { backgroundColor }]}>
        <Text style={styles.name}>{props.name}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default _Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Theme.padding.pad4,
    borderRadius: Theme.padding.pad2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Theme.colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: Theme.padding.pad0,
    shadowOffset: { width: 1, height: 4 }
  },
  name: {
    color: Theme.colors.White,
    fontSize: Theme.fontSize.p1,
    fontWeight: "bold"
  }
});
