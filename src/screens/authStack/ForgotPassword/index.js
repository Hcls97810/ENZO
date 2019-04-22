import React, { Component } from "react";
import { View, Text, Alert } from "react-native";
import { BaseScreen, TextInput, Button, LineButton } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Theme } from "@theme";
import styles from "./styles";

import { connect } from "react-redux";
import { forgotPassword } from "../../../store/auth";
import { validateEmail } from "../../../utils/validator";
class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  validation() {
    if (!validateEmail(this.state.email)) {
      Alert.alert("Validation Error");
    } else {
      return true;
    }
  }
  forgot() {
    if (!this.validation()) {
      return;
    }
    let userInfo = {
      email: this.state.email
    };
    this.props.dispatch(forgotPassword(userInfo));
    this.props.navigation.navigate({
      routeName: "Login",
      params: {
        email: this.state.email
      }
    });
  }
  onPressForgot() {
    this.forgot();
  }
  render() {
    const { email } = this.state;
    return (
      <BaseScreen>
        <KeyboardAwareScrollView style={styles.keyboardcontainer}>
          <Text style={styles.logoBigText}>{"Forgot Your\nPassword?"}</Text>
          <Text style={styles.logoSmallText}>
            {"Shall we send you\na text message"}
          </Text>
          <View style={styles.container}>
            <View style={{ height: Theme.padding.pad6 }} />
            <TextInput
              value={email}
              name="Email:"
              placeholder="Example@gmail.com"
              onChangeText={email => this.setState({ email })}
            />
            <View style={{ height: Theme.padding.pad4 }} />
            <Button name="Confirm" onPress={() => this.onPressForgot()} />
            <View style={{ height: 200 * Theme.Ratio.H }} />
            <LineButton
              style={styles.lineButton}
              name="Cancel"
              onPress={() => this.props.navigation.navigate("Login")}
            />
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

export default connect(mapStateToProps)(ForgotPasswordScreen);
