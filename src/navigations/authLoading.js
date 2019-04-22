import React from "react";
import { ActivityIndicator, AsyncStorage, StatusBar, View } from "react-native";
import { BaseScreen } from "@components";
import { connect } from "react-redux";
import { getmyinfo } from "../store/auth";
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("@token");
    if (!userToken) {
      this.props.navigation.navigate("auth");
    } else {
      this.props.dispatch(getmyinfo(userToken))
    }
  };

  componentDidUpdate(preprops) {
    if (this.props.auth.user != null && !this.props.auth.isFetching) {
      if (this.props.auth.user.is_approved && this.props.auth.user.is_phone_verified) {
        this.props.navigation.navigate("ChooseCategory");
      } else {
        this.props.navigation.navigate("ApprovingAccount");
      }
    } else if (!this.props.auth.isFetching) {
      this.props.navigation.navigate("auth");
    }
  }

  // Render any loading content that you like here
  render() {
    return (
      <BaseScreen>
        <StatusBar barStyle="default" />
        <ActivityIndicator />
      </BaseScreen>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    auth: state.auth
  };
  return props;
};

export default connect(mapStateToProps)(AuthLoadingScreen);
