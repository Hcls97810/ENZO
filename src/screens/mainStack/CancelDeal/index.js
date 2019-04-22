import React, { Component } from "react";
import { View, Text } from "react-native";
import { MainBaseScreen, Button, LineButton, RadioButton } from "@components";
import FastImage from 'react-native-fast-image';
import { Theme } from "@theme";
import styles from "./styles";
import Globals from '../../../Globals';

import { connect } from 'react-redux';
import { cancelDeal } from '../../../store/deal';

class CancelDeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: true
    };
  }
  renderImage(image) {
    if (image !== null) {
      return <FastImage
        style={styles.image}
        source={{ uri: image, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.cover}
      />
    }
  }
  onPressSubmit() {
    this.props.dispatch(cancelDeal(this.props.navigation.state.params.dealData.id));
    this.props.navigation.navigate('FoodAndBeverage');
  }
  render() {
    return (
      <MainBaseScreen title={Globals.category}>
        <View style={styles.container}>
          <View>
            {this.renderImage(
              this.props.navigation.state.params.dealData.image
            )}
          </View>
          <View style={styles.detail}>
            <Text style={styles.title}>Why are you canceling?</Text>
            <View style={styles.radio}>
              <RadioButton
                checked={this.state.selected}
                onPress={() =>
                  this.setState({ selected: !this.state.selected })
                }
              />
              <Text
                checked={this.state.selected}
                onPress={() =>
                  this.setState({ selected: !this.state.selected })
                }
                style={styles.radioText}
              >
                Cannot Make it
              </Text>
              {/* <RadioButton
                checked={!this.state.selected}
                onPress={() =>
                  this.setState({ selected: !this.state.selected })
                }
              />
              <Text
                checked={!this.state.selected}
                onPress={() =>
                  this.setState({ selected: !this.state.selected })
                }
                style={styles.radioText}
              >
                Other
              </Text> */}
            </View>
          </View>
          <View style={styles.submitButton}>
            <Button
              name="Submit"
              onPress={() => this.onPressSubmit()}
            />
          </View>
          <LineButton
            name="Back"
            style={styles.lineButton}
            onPress={() => this.props.navigation.navigate("EnjoyDeal")}
          />
          <View style={{ flex: 1, height: 50 * Theme.Ratio.H }} />
        </View>
      </MainBaseScreen>
    );
  }
}

export default connect()(CancelDeal);
