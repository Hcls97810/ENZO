import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Theme } from "@theme";

const MainBaseScreen = props => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Theme.colors.Tango, Theme.colors.PersianRed]}
        style={styles.header}
      >
        <Text style={styles.headerText}>{props.title}</Text>
      </LinearGradient>
      {props.children}
    </View>
  );
};

export default MainBaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.White
  },
  header: {
    height: Theme.isIphoneX ? Theme.padding.pad8 : Theme.padding.pad5,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Theme.isIphoneX ? Theme.padding.pad3 : 10
  },
  headerText: {
    color: Theme.colors.White,
    fontWeight: "bold",
    fontSize: Theme.fontSize.p2
  }
});
