import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { BaseScreen, TextInput, Button, LineButton, LoadingIndicator } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Theme } from "@theme";
import styles from "./styles";

import { connect } from "react-redux";
import { register } from "../../../store/auth";
import { validateEmail } from "../../../utils/validator";

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      instagramAccount: "",
      email: "",
      mobileNumber: ""
    };
  }
  validation() {
    const { username, password, instagramAccount, email, mobileNumber } = this.state;
    if (
      !validateEmail(this.state.email)
    ) {
      Alert.alert("Please input correct email");
    } else if (username === "" || password === "" || instagramAccount === "" || email === "" || mobileNumber === "") {
      Alert.alert("Please fill all fields");
    } else {
      return true;
    }
  }
  register() {
    if (!this.validation()) {
      return;
    }
    let userInfo = {
      email: this.state.email,
      password: this.state.password,
      insta_url: `https://instagram.com/${this.state.instagramAccount}`,
      name: this.state.username,
      bio: 'a',
      snapchat_url: `https://snapchat.com/${this.state.instagramAccount}`,
      twitter_url: `https://twitter.com/${this.state.instagramAccount}`,
      blog_url: `https://blog.com/${this.state.instagramAccount}`,
      other_url: `https://other.com/${this.state.instagramAccount}`,
      balance: 100,
      mobileNumber: '+962' + this.state.mobileNumber
    };
    this.props.dispatch(register(userInfo));
  }
  onPressConfirm() {
    this.register();
  }
  componentDidUpdate(prevProps) {
    if (this.props.auth.user != null && !this.props.auth.isFetching) {
      if (this.props.auth.user.is_approved && this.props.auth.user.is_phone_verified) {
        this.props.navigation.navigate("ChooseCategory");
      } else {
        this.props.navigation.navigate("ApprovingAccount");
      }
    }
  }
  render() {
    const {
      username,
      password,
      instagramAccount,
      email,
      mobileNumber
    } = this.state;
    return (
      <BaseScreen>
        <KeyboardAwareScrollView>
          <Text style={styles.logoBigText}>Sign Up</Text>
          <Text style={styles.logoSmallText}>Sign up to join</Text>
          <View style={styles.container}>
            <View style={{ height: Theme.padding.pad6 }} />
            <TextInput
              value={username}
              name="Name:"
              placeholder="mohammad amer"
              onChangeText={username => this.setState({ username })}
            />
            <View style={{ height: Theme.padding.pad2 }} />
            <TextInput
              value={password}
              name="Password:"
              placeholder="************"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <View style={{ height: Theme.padding.pad2 }} />
            <TextInput
              value={instagramAccount}
              name="Instagram:"
              placeholder="Enter Instagram username"
              onChangeText={instagramAccount =>
                this.setState({ instagramAccount })
              }
            />
            <View style={{ height: Theme.padding.pad2 }} />
            <TextInput
              value={email}
              name="Email:"
              placeholder="Example@gmail.com"
              style={{ keyboardType: "email-address" }}
              onChangeText={email => this.setState({ email })}
              keyboardType='email-address'
            />
            <View style={{ height: Theme.padding.pad2 }} />
            <TextInput
              value={this.state.mobileNumber}
              name="Mobile Number: "
              type="phone"
              placeholder="79 5554489"
              style={{ keyboardType: "numeric" }}
              onChangeText={mobileNumber => {
                this.setState({ mobileNumber })
              }}
              keyboardType='phone-pad'
            />
            <View style={{ marginTop: 30, width: 150, alignSelf: "center" }}>
              <Button name="Confirm" onPress={() => this.onPressConfirm()} />
            </View>
          </View>
          <View style={{ height: Theme.padding.pad5 }} />
          <LineButton
            style={styles.lineButton}
            name="cancel"
            onPress={() => this.props.navigation.navigate("Login")}
          />
        </KeyboardAwareScrollView>
        {
          this.props.auth.isFetching &&
          <LoadingIndicator />
        }
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

export default connect(mapStateToProps)(SignupScreen);
