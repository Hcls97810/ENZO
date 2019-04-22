import React, { Component } from "react";
import { Image, View } from 'react-native';
import MapView from "react-native-maps";
import Marker from "../../../../components/Marker";
import MarkerModal from "../../../../components/MarkerModal";
import { Theme, Images } from "@theme";
import styles from "./styles";

class _MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTransition: 1,
      endTransition: 6,
      region: {
        latitude: this.props.regionlat,
        longitude: this.props.regionlng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
    this.onSeemore = this.onSeemore.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.regionlat !== prevProps.regionlat ||
      this.props.regionlng !== prevProps.regionlng
    ) {
      this.setState({
        region: {
          ...this.state.region,
          latitude: this.props.regionlat,
          longitude: this.props.regionlng
        }
      });
    }
  }

  renderImg(imgTrans) {
    if (imgTrans === 1) {
      return require("../../../../assets/images/person_1.png");
    }
    if (imgTrans === 2) {
      return require("../../../../assets/images/person_2.png");
    }
    if (imgTrans === 3) {
      return require("../../../../assets/images/person_3.png");
    }
    if (imgTrans === 4) {
      return require("../../../../assets/images/person_4.png");
    }
    if (imgTrans === 5) {
      return require("../../../../assets/images/person_3.png");
    }
    if (imgTrans === 6) {
      return require("../../../../assets/images/person_2.png");
    }
  }

  onRegionChange = region => {
    this.setState({ region });
  };

  onSeemore(dealData) {
    this.props.navigation.navigate({
      routeName: "TakeDeal",
      params: {
        dealData: dealData
      }
    });
  }

  render() {
    const { startTransition } = this.state;
    return (
      <MapView
        {...this.props}
        style={{ flex: 1, marginTop: Theme.padding.pad2 }}
        region={this.state.region}
      >
        <Marker
          coordinate={{
            latitude: this.props.regionlat,
            longitude: this.props.regionlng
          }}
        >
          <View
            style={{
              width: Theme.padding.pad8,
              height: Theme.padding.pad8,
              backgroundColor: '#0000FF20',
              borderRadius: Theme.padding.pad4,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: Theme.padding.pad15,
                height: Theme.padding.pad15,
                borderRadius: 8 * Theme.Ratio.H,
                backgroundColor: '#0000FF',
                borderColor: 'white',
                borderWidth: 3
              }}
            />
          </View>
        </Marker>
        {this.props.dealData !== null
          ? this.props.dealData.map(marker => {
            let position = marker.position.split(",");
            const lat = parseFloat(position[0], 10);
            const long = parseFloat(position[1], 10);
            return (
              <MapView.Marker
                onCalloutPress={() => this.onSeemore(marker)}
                key={marker.id}
                coordinate={{
                  latitude: lat,
                  longitude: long
                }}
              >
                <Image
                  source={
                    marker.status === 1 ? Images.marker1 : Images.marker
                  }
                  style={{ width: 49 * 0.4 * Theme.Ratio.H, height: 104 * 0.4 * Theme.Ratio.H }}
                />
                <MarkerModal
                  id={marker.id}
                  title={marker.title}
                  image={marker.image}
                  body={marker.body}
                  created_at={marker.created_at}
                  business={marker.business}
                />
              </MapView.Marker>
            );
          })
          : null}
      </MapView>
    );
  }
}

export default _MapView;
