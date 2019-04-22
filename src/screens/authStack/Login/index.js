import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, TouchableOpacity, Alert, Platform, PermissionsAndroid } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BaseScreen, TextInput, Button, LineButton } from "@components";
import { Theme, Images } from "@theme";
import styles from "./styles";
import { login } from "../../../store/auth";
import { validateEmail } from "../../../utils/validator";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "dev master",
      password: "",
      email: ""
    };
  }
  async componentDidMount() {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location")
      } else {
        console.log("Location permission denied")
      }
    }
  }
  validation() {
    if (!validateEmail(this.state.email)) {
      Alert.alert("Validation Error");
    } else {
      return true;
    }
  }
  login() {
    if (!this.validation()) {
      return;
    }
    let userInfo = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };
    this.props.dispatch(login(userInfo));
  }
  componentDidUpdate(preprops) {
    if (this.props.auth.user != null && !this.props.auth.isFetching) {
      if (this.props.auth.user.is_approved && this.props.auth.user.is_phone_verified) {
        this.props.navigation.navigate("ChooseCategory");
      } else {
        this.props.navigation.navigate("ApprovingAccount");
      }
    }
  }
  onPressLogin() {
    this.login();
  }
  render() {
    const { email, password } = this.state;
    return (
      <BaseScreen>
        <KeyboardAwareScrollView style={styles.keyboardcontainer}>
          <View style={styles.container}>
            <Image style={styles.logoImage} source={Images.logoImage} />
            <View style={{ height: Theme.padding.pad8 }} />
            <TextInput
              value={email}
              name="Email:"
              fontSize={Theme.fontSize.p2}
              placeholder="Example@gmail.com"
              onChangeText={email => this.setState({ email })}
              keyboardType='email-address'
            />
            <View style={{ height: Theme.padding.pad4 }} />
            <TextInput
              value={password}
              name="Password:"
              placeholder="************"
              fontSize={Theme.fontSize.p2}
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <View style={{ height: Theme.padding.pad6 }} />
            <Button name="Login" onPress={() => this.onPressLogin()} />
          </View>

          <View style={{ height: Theme.padding.pad8 }} />
          <View style={styles.signupTextContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <LineButton
              style={{
                fontWeight: "bold",
                color: Theme.colors.White,
                borderColor: Theme.colors.White
              }}
              name="sign up"
              onPress={() => this.props.navigation.navigate("Signup")}
            />
          </View>
          <View style={{ height: Theme.padding.pad8 }} />
          <View style={styles.signupTextContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgotButton}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ height: Theme.padding.pad6 }} />
        </KeyboardAwareScrollView>
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

export default connect(mapStateToProps)(LoginScreen);
