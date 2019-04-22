import React, { Component } from "react";
import { View, Text } from "react-native";
import { BaseScreen, LineButton } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CodeInput from "react-native-confirmation-code-input";
import { Theme } from "@theme";
import styles from "./styles";

import { connect } from "react-redux";
import { forgotPassword } from "../../../store/auth";

class VerifyCodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyCode: ""
    };
  }
  resendCode() {
    let userInfo = {
      email: this.props.navigation.state.params.email
    };
    this.props.dispatch(forgotPassword(userInfo));
  }
  onFinishCheckingcode(code) {
    this.props.navigation.navigate({
      routeName: "ResetPassword",
      params: {
        email: this.props.navigation.state.params.email
      }
    });
  }
  render() {
    return (
      <BaseScreen>
        <KeyboardAwareScrollView style={styles.keyboardcontainer}>
          <Text style={styles.logoBigText}>{"Verification"}</Text>
          <View style={{ height: Theme.padding.pad8 }} />
          <Text style={styles.logoSmallText}>
            {"Enter the 5 digit code we sent you \n via email to continue"}
          </Text>
          <View style={styles.container}>
            <View style={{ height: Theme.padding.pad6 }} />
            <CodeInput
              ref="codeInputRef1"
              secureTextEntry
              keyboardType="numeric"
              size={50}
              className="border-circle"
              inputPosition="center"
              onFulfill={code => this.onFinishCheckingcode(code)}
            />
            <View style={{ height: 150 * Theme.Ratio.H }} />
            <View style={styles.resendTextContainer}>
              <Text style={styles.resendText}>Didn't get the code?</Text>
              <LineButton
                style={styles.lineButton}
                name="Resend code"
                onPress={() => this.resendCode()}
              />
            </View>
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

export default connect(mapStateToProps)(VerifyCodeScreen);
