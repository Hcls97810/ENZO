import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { BaseScreen, Button, DropDown, LineButton, LoadingIndicator } from "@components";
import { Theme } from "@theme";
import styles from "./styles";
import Geocoder from "react-native-geocoder";
import countryList from "../../../constants/countryStateAreaList.json";
import cityLists from "../../../constants/cityList.json";
import Globals from "../../../Globals";

import { connect } from 'react-redux';
import { getAllDealcategory } from '../../../store/deal';
import Geolocation from 'react-native-geolocation-service';

class ChooseCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      category: "",
      categoryData: [],
      selectedCountry: "",
      selectedCIndex: 0,
      selectedSIndex: -1,
      loadedLocation: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(getAllDealcategory());

    var myApiKey = "AIzaSyCU4YlcxKL5lleN5wKiRfLhoJPfGXOjTRs";
    Geocoder.fallbackToGoogle(myApiKey);
    this.watchId = Geolocation.getCurrentPosition(
      (position) => {
        if (this.state.loadedLocation) {
          return;
        }
        var NY = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        Globals.latitude = position.coords.latitude;
        Globals.longitude = position.coords.longitude;
        Geocoder.geocodePosition(NY)
          .then(res => {
            this.setState({ loadedLocation: true });
            Globals.loadedLocation = true;
            const countryCode = res[0].countryCode;
            Globals.countryCode = countryCode;
            for (let i = 0; i < countryList.length; i++) {
              if (countryList[i].iso2 == countryCode) {
                this.setState({
                  country: countryList[i].name,
                  selectedCIndex: i
                });
                Globals.areaName = res[0].locality;
                break;
              }
            }
          })
          .catch(err => console.log(err));
      },
      errors => {
        this.setState({ locationError: errors.message });
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 10000
      }
    );
  }

  componentDidUpdate(preprops) {
    if (this.props.deal.dealcategory !== null && this.props.deal.dealcategory !== preprops.deal.dealcategory) {
      let categoryData = [];
      this.props.deal.dealcategory.map((item, index) => {
        categoryData.push({
          ...item,
          value: item.title
        })
      })
      this.setState({
        categoryData,
        category: categoryData[0].title
      })
    }
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  validation() {
    if (this.state.country !== "" && this.state.category !== "") {
      return true;
    } else {
      Alert.alert("Validation Error");
    }
  }

  onPressLogin() {
    if (!this.validation()) {
      return;
    }
    Globals.category = this.state.category;
    this.props.navigation.navigate("FoodAndBeverage");
  }

  render() {
    return (
      <BaseScreen>
        <Text style={styles.logoBigText}>Choose Category</Text>
        <View style={styles.container}>
          <View style={{ marginTop: 100 * Theme.Ratio.H }}>
            <DropDown
              name="Choose Country:"
              value={this.state.country}
              data={data}
              onChangeText={(country, index) =>
                this.setState({
                  country: country,
                  selectedCIndex: index,
                  category: ""
                })
              }
            />
          </View>
          <View style={{ marginTop: Theme.padding.pad2 }}>
            <DropDown
              name="Choose Category:"
              value={this.state.category}
              // data={getStates(this.state.country)}
              data={this.state.categoryData}
              onChangeText={(item, index) => {
                this.setState({ category: item, selectedSIndex: index });
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <View style={styles.nextButton}>
          <Button name="Next" onPress={() => this.onPressLogin()} />
        </View>
        <LineButton
          style={styles.lineButton}
          name="Cancel"
          onPress={() => this.props.navigation.navigate("FoodAndBeverage")}
        />
        <View style={{ height: Theme.padding.pad8 }} />
        {/* {
          !this.state.loadedLocation && !this.props.deal.isFetching &&
          < LoadingIndicator />
        } */}
      </BaseScreen>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    deal: state.deal
  };
  return props;
};

export default connect(mapStateToProps)(ChooseCategoryScreen);

var data = countryList.map(function (item) {
  return {
    value: item.name,
    id: item.id,
    states: item.states
  };
});

var cityData = cityLists.map(function (item) {
  return {
    country: item.country,
    city: item.city,
    lat: item.lat,
    lng: item.lng,
    iso2: item.iso2
  };
});

const getStates = country => {
  let id = 0;
  let stateArray = [];
  for (let key in cityData) {
    if (cityData[key].country === country) {
      stateArray.push({
        value: cityData[key].city,
        id,
        cityData: cityData[key]
      });
      id++;
    }
  }
  return stateArray;
};
