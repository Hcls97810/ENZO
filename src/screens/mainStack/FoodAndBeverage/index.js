import React, { Component } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { MainBaseScreen, DropDown, LoadingIndicator } from "@components";
import MapView from "./MapView";
import ListView from "./ListView";
import { Theme, Images } from "@theme";
import styles from "./styles";

import { connect } from "react-redux";
import geolib from "geolib";
import { getAllDeal } from "../../../store/deal";
import { logout } from "../../../store/auth";
import cityLists from "../../../constants/cityList.json";
import Globals from "../../../Globals";

class FoodAndBeverageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: "",
      lat: 31.9516,
      lng: 35.9456,
      viewType: 0,
      country: "",
      citylist: [],
      loadedLocation: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getAllDeal());
    this.setInitialData();
  }

  componentDidUpdate(preprops) {
    if (preprops.auth.user !== null && this.props.auth.user === null) {
      this.props.navigation.navigate("auth");
    }
  }

  goBack() {
    this.props.navigation.navigate("ChooseCategory");
  }

  setInitialData() {
    let nearCityLists = [];
    let sortednearCityLists = [];

    for (let i = 0; i < cityLists.length; i++) {
      if (cityLists[i].iso2 == Globals.countryCode) {
        if (
          geolib.isPointInCircle(
            {
              latitude: cityLists[i].lat,
              longitude: cityLists[i].lng
            },
            {
              latitude: Globals.latitude,
              longitude: Globals.longitude
            },
            50000
          )
        ) {
          nearCityLists.push(cityLists[i]);
        }
      }
    }
    sortKeyArray = geolib.orderByDistance(
      {
        latitude: Globals.latitude,
        longitude: Globals.longitude
      },
      nearCityLists
    );
    for (let i = 0; i < sortKeyArray.length; i++) {
      sortednearCityLists.push(
        nearCityLists[parseInt(sortKeyArray[i].key)]
      );
    }
    if (sortednearCityLists.length > 0) {
      this.setState({
        selectedArea: sortednearCityLists[0].city
      })
    } else {
      this.setState({
        selectedArea: Globals.areaName
      })
    }
    this.setState({
      cityList: sortednearCityLists,
      loadedLocation: true,
      lat: Globals.latitude,
      lng: Globals.longitude
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }


  getDealStatus(deal) {
    if (this.props.auth.user === null) {
      return 0;
    }
    const cancelled_deals = this.props.auth.user.cancelled_deals;
    if (deal.influencers) {
      for (let i = 0; i < deal.influencers.length; i++) {
        if (deal.influencers[i] === this.props.auth.user.id) {
          return 1;
        }
      }
    }
    return 0;
  }

  getDealsByCategory() {
    let dealData = [];
    const { deals } = this.props.deal;
    if (deals === null) {
      return dealData;
    }
    deals.map((item, index) => {
      if (item.category_title === Globals.category) {
        dealData.push({
          ...item,
          image: item.image ? item.image : 'http://admin.enzo-app.com/media/images/default_business.png',
          status: this.getDealStatus(item)
        });
      }
    })
    return dealData
  }

  render() {
    const dealData = this.getDealsByCategory();
    return (
      <MainBaseScreen title={Globals.category}>
        <View style={styles.dropDownContainer}>
          <DropDown
            name="Choose Area:"
            data={getCityData(this.state.cityList)}
            value={this.state.selectedArea}
            onChangeText={(text, key) => {
              this.setState({
                selectedArea: text,
                lat: this.state.cityList[key].lat,
                lng: this.state.cityList[key].lng
              });
            }}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[
              styles.mapButton,
              this.state.viewType == 0
                ? styles.downyColorButton
                : styles.greyColorButton
            ]}
            onPress={() => this.setState({ viewType: 0 })}
          >
            <Image
              style={[
                styles.viewListImage,
                this.state.viewType == 0
                  ? { tintColor: "white" }
                  : { tintColor: "grey" }
              ]}
              source={Images.mapList}
            />
            <Text
              style={
                this.state.viewType == 0
                  ? { color: "white" }
                  : { color: "grey" }
              }
            >
              View as a Map
            </Text>
          </TouchableOpacity>
          <View style={{ width: Theme.padding.pad3 }} />
          <TouchableOpacity
            style={[
              styles.mapButton,
              this.state.viewType == 1
                ? styles.downyColorButton
                : styles.greyColorButton
            ]}
            onPress={() => this.setState({ viewType: 1 })}
          >
            <Image
              style={[
                styles.mapListImage,
                this.state.viewType == 1
                  ? { tintColor: "white" }
                  : { tintColor: "grey" }
              ]}
              source={Images.viewList}
            />
            <Text
              style={
                this.state.viewType == 1
                  ? { color: "white" }
                  : { color: "grey" }
              }
            >
              View as a List
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.viewType == 0 ? (
          <MapView
            {...this.props}
            dealData={dealData}
            user={this.props.auth.user}
            regionlat={this.state.lat}
            regionlng={this.state.lng}
            style={{ flex: 1 }}
          />
        ) : (
            <ListView
              {...this.props}
              dealData={dealData}
              areaName={this.state.selectedArea}
              user={this.props.auth.user}
            />
          )}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: this.state.viewType == 1 ? 'none' : 'flex',
            paddingHorizontal: Theme.padding.pad2
          }}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.goBack()}
          >
            <Text style={{ color: Theme.colors.Tango }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.dispatch(logout())}
          >
            <Text style={{ color: Theme.colors.Tango }}>Log out</Text>
          </TouchableOpacity>
        </View>
        {/* {(this.props.deal.isFetching || !this.state.loadedLocation) && <LoadingIndicator />} */}
      </MainBaseScreen>
    );
  }
}

const getCityData = data => {
  let id = 0;
  let cityArray = [];
  for (let key in data) {
    cityArray.push({
      value: data[key].city,
      id,
      lat: data[key].lat,
      lng: data[key].lng
    });
    id++;
  }
  return cityArray;
};

const mapStateToProps = state => {
  const props = {
    auth: state.auth,
    deal: state.deal
  };
  return props;
};

export default connect(mapStateToProps)(FoodAndBeverageScreen);
