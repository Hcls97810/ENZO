import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  WebView
} from "react-native";

import MapView from "react-native-maps";
import moment from "moment";
import { Theme } from "@theme";

class _MarkerModal extends Component {
  render() {
    return (
      <MapView.Callout style={styles.callout} tooltip={true}>
        <View {...this.props} style={styles.container}>
          <View style={styles.image}>
            <WebView
              originWhitelist={["*"]}
              style={styles.image}
              source={{
                html: `
                    <head>
                      <style>
                        body {
                          position: relative;
                        }
                        img {
                          max-width: 100%; 
                          height: 100%; 
                          object-fit: cover;
                        }
                      </style>
                    </head>
                    <body style="backgroundColor: white; margin: 0; overflow: hidden;">
                      <img id="logo" src=${this.props.image} alt="logo" />
                    </body>
                  `
              }}
              injectedJavaScript={""}
              javaScriptEnabledAndroid={true}
              mixedContentMode={"always"}
              scrollEnabled={false}
            />
          </View>

          <View style={styles.text}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
              {this.props.title}
            </Text>
            <Text style={styles.time}>
              {moment(this.props.created_at).format("hh:mm")}
            </Text>
            <TouchableHighlight
              underlayColor="#dddddd"
              style={{ alignSelf: "center" }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>see more</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </MapView.Callout>
    );
  }
}

export default _MarkerModal;

const styles = StyleSheet.create({
  callout: {
    backgroundColor: Theme.colors.Black
  },
  container: {
    flex: 1,
    width: Theme.Ratio.H * 250,
    backgroundColor: Theme.colors.Grey,
    flexDirection: "row",
    shadowColor: Theme.colors.Black,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 4 },
    borderWidth: Theme.padding.pad0,
    borderColor: Theme.colors.Grey,
    zIndex: 0
  },
  image: {
    height: Theme.padding.pad7,
    width: Theme.padding.pad8
  },
  text: {
    marginLeft: Theme.padding.pad1,
    marginRight: Theme.padding.pad1,
    flex: 1
  },
  title: {
    flex: 1,
    color: Theme.colors.Tango,
    fontSize: Theme.fontSize.p1,
    height: Theme.padding.pad2
  },
  time: {
    color: Theme.colors.Black,
    fontSize: Theme.fontSize.p15,
    fontWeight: "300"
  },
  button: {
    width: Theme.Ratio.H * 100,
    height: Theme.padding.pad2,
    backgroundColor: Theme.colors.PersianRed,
    marginTop: Theme.padding.pad0,
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
