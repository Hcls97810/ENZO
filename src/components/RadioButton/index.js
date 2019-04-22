import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { Theme, Images } from "@theme";
const RadioButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons
        name={props.checked ? "md-radio-button-on" : "md-radio-button-off"}
        size={Theme.fontSize.h4}
        color={Theme.colors.Sirocco}
        borderColor={Theme.colors.Grey}
      />
    </TouchableOpacity>
  );
};

export default RadioButton;
