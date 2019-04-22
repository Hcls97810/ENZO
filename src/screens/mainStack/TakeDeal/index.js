import React, { Component } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { MainBaseScreen, Button, LineButton } from "@components";
import StarRating from "react-native-star-rating";
import FastImage from "react-native-fast-image";
import { Theme } from "@theme";
import styles from "./styles";
import { connect } from "react-redux";
import moment from "moment";
import Globals from "../../../Globals";

class TakeDeal extends Component {
  constructor(props) {
    super(props);
  }
  onPressTakeDeal() {
    const status = this.props.navigation.state.params.dealData.status;
    if (status === 1) {
      alert('You already took this deal');
    } else {
      Alert.alert(
        'Take Deal',
        'Are you sure you want to take this deal ?',
        [
          {
            text: 'Yes',
            onPress: () => this.props.navigation.navigate({
              routeName: "EnjoyDeal",
              params: {
                dealData: this.props.navigation.state.params.dealData
              }
            })
          },
          {
            text: 'No',
            onPress: () => { return }
          }
        ]
      )
    }
  }
  onPressCancelDeal() {
    const status = this.props.navigation.state.params.dealData.status;
    if (status === 1) {
      Alert.alert(
        'Cancel Deal',
        'Are you sure you want to cancel this deal ?',
        [
          {
            text: 'Yes',
            onPress: () => this.props.navigation.navigate({
              routeName: "CancelDeal",
              params: {
                dealData: this.props.navigation.state.params.dealData
              }
            })
          },
          {
            text: 'No',
            onPress: () => { return }
          }
        ]
      )
    } else {
      alert(`You didn't take this deal`);
    }
  }
  renderImage(image) {
    if (image !== null) {
      return (
        <FastImage
          style={styles.image}
          source={{ uri: image, priority: FastImage.priority.normal }}
          resizeMode={FastImage.resizeMode.cover}
        />
      );
    }
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
          <View style={styles.rating}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.foodTitle}
            >
              {this.props.navigation.state.params.dealData.business.name}
            </Text>
            <StarRating
              disabled={false}
              maxStars={5}
              starSize={15}
              rating={
                this.props.navigation.state.params.dealData.rating !== null
                  ? this.props.navigation.state.params.dealData.rating
                  : 0
              }
              fullStarColor={Theme.colors.PersianRed}
              emptyStarColor={Theme.colors.PersianRed}
              style={styles.star}
            />
          </View>
          <View style={styles.food}>
            <Text style={styles.foodType} />
            <TouchableOpacity>
              <Text style={styles.open}>open now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detail}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.detailTitle}
            >
              {this.props.navigation.state.params.dealData.title}
            </Text>
            <Text style={styles.time}>
              {moment(
                this.props.navigation.state.params.dealData.created_at
              ).format("HH:mm")}
            </Text>

            <Text style={styles.detailText}>
              {Object.values(this.props.navigation.state.params.dealData.body)}
            </Text>
          </View>
          <View style={styles.takeButton}>
            <Button onPress={() => this.onPressTakeDeal()} name="Take deal" />
          </View>
          <LineButton
            name="Cancel"
            style={styles.lineButton}
            onPress={() => this.onPressCancelDeal()}
          />
          <View style={{ height: Theme.padding.pad8 }} />
        </View>
      </MainBaseScreen>
    );
  }
}

export default connect()(TakeDeal);
