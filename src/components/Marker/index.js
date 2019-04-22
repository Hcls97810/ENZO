import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import { Theme, Images } from "@theme";

class _Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Marker {...this.props} image={this.props.image} style={styles.marker} />
    );
  }
}

export default _Marker;

const styles = StyleSheet.create({
  marker: {}
});
