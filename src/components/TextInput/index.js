import React from "react";
import { Card } from "native-base";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Theme } from "@theme";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const _TextInput = props => {
  return (
    <Card style={styles.container}>
      <Text style={[styles.name, { fontSize: props.fontSize }]}>
        {props.name}
      </Text>
      <Text style={{ display: props.type === "phone" ? 'flex' : 'none' }}>{'+962 '}</Text>
      <TextInput
        {...props}
        style={[styles.textInput, { fontSize: props.fontSize }]}
        autoCapitalize='none'
      />
    </Card>
  );
};

export default _TextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Theme.padding.pad4,
    paddingHorizontal: Theme.padding.pad2,
    alignItems: "center",
    borderRadius: Theme.padding.pad2,
    shadowColor: Theme.colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: Theme.padding.pad0,
    shadowOffset: { width: 1, height: 4 }
  },
  name: {
    color: "grey",
    paddingRight: Theme.padding.pad0,
    fontSize: Theme.fontSize.p2
  },
  textInput: {
    flex: 1,
    height: Theme.padding.pad4,
    fontSize: Theme.fontSize.p2,
    padding: 0,
    alignItems: "center",
  }
});
