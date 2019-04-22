import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import moment from "moment";
import StarRating from "react-native-star-rating";
import FastImage from 'react-native-fast-image';
import { Theme } from "@theme";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  onPressSeemore() {
    this.props.navigation.navigate({
      routeName: "TakeDeal",
      params: {
        dealData: this.props.dealData
      }
    });
  }
  renderImage(image) {
    if (image !== null) {
      return <FastImage
        style={styles.image}
        source={{ uri: image, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.cover}
      />;
    }
  }
  render() {
    const { dealData } = this.props;
    return (
      <View {...this.props} style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.viewImage}>
            {this.renderImage(this.props.image)}
          </View>
          <View style={styles.text}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
              {this.props.title}
            </Text>
            <Text style={styles.time}>
              {moment(dealData.created_at).format("HH:mm")}
            </Text>
            <TouchableOpacity onPress={() => this.onPressSeemore()}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>see more</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rating}>
          <StarRating
            disabled={false}
            maxStars={5}
            starSize={23}
            rating={this.props.rating !== null ? this.props.rating : 0}
            fullStarColor={Theme.colors.PersianRed}
            emptyStarColor={Theme.colors.PersianRed}
            style={styles.star}
          />
          <View style={styles.till}>
            <Text style={styles.tillText}>valid till</Text>
            <Text style={styles.tillDate}>
              {moment(this.props.created_at).format("DD-MM-YYYY")}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 5,
    marginHorizontal: Theme.isIphoneX ? Theme.padding.pad2 : Theme.padding.pad4,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.Sirocco,
    paddingTop: Theme.padding.pad4,
    paddingBottom: Theme.padding.pad4,
    justifyContent: "space-between"
  },
  modal: {
    flex: 3,
    backgroundColor: Theme.colors.Grey,
    flexDirection: "row",
    shadowColor: Theme.colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 4 },
    borderWidth: Theme.padding.pad0,
    borderColor: Theme.colors.Grey
  },
  rating: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Theme.padding.pad1
  },
  star: {
    // width: Theme.padding.pad8 + Theme.padding.pad3,
    // height: Theme.padding.pad2,
    marginBottom: Theme.padding.pad1
    // color: Theme.colors.PersianRed
  },
  till: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  tillText: {
    fontSize: Theme.fontSize.p4,
    fontWeight: "bold",
    color: Theme.colors.Sirocco
  },
  tillDate: {
    fontSize: Theme.fontSize.p4,
    fontWeight: "400",
    marginLeft: Theme.padding.pad0,
    color: Theme.colors.Sirocco
  },
  viewImage: {
    marginLeft: Theme.padding.pad0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: Theme.padding.pad7,
    width: Theme.padding.pad8,
    paddingTop: Theme.isIphoneX ? Theme.padding.pad3 : 0
  },
  text: {
    flex: 1,
    marginLeft: Theme.padding.pad1,
    marginRight: Theme.padding.pad1,
    justifyContent: "center"
  },
  title: {
    color: Theme.colors.Tango,
    fontSize: Theme.fontSize.p1,
    height: Theme.padding.pad2
  },
  time: {
    color: Theme.colors.Sirocco,
    fontSize: Theme.fontSize.p15,
    fontWeight: "300"
  },
  button: {
    paddingLeft: Theme.padding.pad1,
    paddingRight: Theme.padding.pad1,
    height: Theme.padding.pad2,
    backgroundColor: Theme.colors.PersianRed,
    marginTop: Theme.padding.pad0,
    marginBottom: Theme.padding.pad0,
    borderRadius: Theme.padding.pad5
  },
  buttonText: {
    textAlign: "center",
    justifyContent: "center",
    color: Theme.colors.White,
    fontSize: Theme.fontSize.p3,
    fontWeight: "bold"
  }
});
