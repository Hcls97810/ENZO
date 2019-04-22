import React, { Component } from "react";
import { View, Text } from "react-native";
import { MainBaseScreen, Button, LineButton } from "@components";
import FastImage from 'react-native-fast-image';
import { Theme } from "@theme";
import styles from "./styles";
import Globals from '../../../Globals';

import { connect } from 'react-redux';
import { takeDeal } from '../../../store/deal';

class EnjoyDeal extends Component {
  constructor(props) {
    super(props);
  }
  onCancel() {
    this.props.navigation.navigate({
      routeName: "CancelDeal",
      params: {
        dealData: this.props.navigation.state.params.dealData
      }
    });
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
  onPressExit() {
    this.props.dispatch(takeDeal(this.props.navigation.state.params.dealData.id));
    this.props.navigation.navigate("FoodAndBeverage");
  }
  render() {
    return (
      <MainBaseScreen title={Globals.category}>
        <View {...this.props} style={styles.container}>
          <View>
            {this.renderImage(
              this.props.navigation.state.params.dealData.image
            )}
          </View>
          <View style={styles.detail}>
            <Text style={styles.title}>Enjoy Your Deal!</Text>
            <Text style={styles.text}>You have 72 hours to take it!</Text>
          </View>
          <View style={styles.takeButton}>
            <Button
              onPress={() => this.onPressExit()}
              name="Exit"
            />
          </View>
          <LineButton
            name="Cancel"
            style={styles.lineButton}
            onPress={() => this.onCancel()}
          />
          <View style={{ height: Theme.padding.pad8 }} />
        </View>
      </MainBaseScreen>
    );
  }
}

export default connect()(EnjoyDeal);
