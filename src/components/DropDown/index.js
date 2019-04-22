import React, { Component } from "react";
import { Card } from "native-base";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { Theme, Images } from "@theme";

export default class _DropDown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Card style={styles.container}>
        <Text style={[styles.name, { fontSize: this.props.fontSize }]}>
          {this.props.name}
        </Text>
        <View style={styles.dropdown}>
          <Dropdown
            {...this.props}
            renderBase={() => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: "100%"
                }}
              >
                <Text
                  style={[
                    styles.name,
                    { fontSize: this.props.fontSize, color: "transparent" }
                  ]}
                >
                  {this.props.name}
                </Text>
                <TextInput
                  style={{ flex: 1, height: "100%", padding: 0 }}
                  value={this.props.value}
                  autoCapitalize="none"
                />
                <Image
                  source={Images.dropDownIcon}
                  style={styles.dropDownImage}
                />
              </View>
            )}
            dropdownPosition={1}
            dropdownOffset={{
              top: Theme.isIphoneX ? 97 : 90,
              left: 0
            }}
            dropdownMargins={{
              min: 0,
              max: 0
            }}
            itemCount={6}
            itemTextStyle={{
              borderBottomWidth: 1,
              borderColor: "grey",
              paddingLeft: Theme.padding.pad1
            }}
            pickerStyle={{
              padding: 0,
              margin: 0
            }}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Theme.padding.pad4,
    paddingHorizontal: Theme.padding.pad2,
    borderRadius: Theme.padding.pad2,
    alignItems: "center",
    shadowColor: Theme.colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: Theme.colors.Grey,
    shadowOffset: { width: 1, height: 4 }
  },
  name: {
    color: "grey",
    marginRight: Theme.padding.pad15,
    fontSize: Theme.fontSize.p2
  },
  dropdown: {
    height: Theme.padding.pad4,
    position: "absolute",
    zIndex: 2,
    marginLeft: Theme.padding.pad2,
    width: "100%"
  },
  dropDownImage: {
    width: 12 * Theme.Ratio.H,
    height: 10 * Theme.Ratio.H
  }
});
