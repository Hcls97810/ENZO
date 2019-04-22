import React, { Component } from "react";
import { View, Text } from "react-native";
import { BaseScreen, TextInput, Button, LineButton } from "@components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Theme } from "@theme";
import styles from "./styles";
import { connect } from "react-redux";

class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validation() {
    return true;
  }
  resetPassword() {
    if (!this.validation()) {
      return;
    }
    let userInfo = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.dispatch(resetPassword(userInfo));
  }
  onPressReset() {
  }
  componentDidMount() {
    this.setState({
      email: "dev1@gmail.com"
    });
  }
  render() {
    const { password, email } = this.state;
    return (
      <BaseScreen>
        <KeyboardAwareScrollView>
          <Text style={styles.logoBigText}>Reset Password</Text>
          <View style={styles.container}>
            <View style={{ height: Theme.padding.pad8 }} />
            <TextInput
              value={email}
              name="Email:"
              style={{ keyboardType: "email-address" }}
            />
            <View style={{ height: Theme.padding.pad5 }} />
            <TextInput
              value={password}
              name="Password:"
              placeholder="************"
              secureTextEntry
              onChangeText={password => this.setState({ password })}
            />
            <View style={{ height: Theme.padding.pad3 }} />

            <View style={{ marginTop: 30, width: 150, alignSelf: "center" }}>
              <Button name="Reset" onPress={() => this.onPressReset()} />
            </View>
          </View>
          <View style={{ height: Theme.padding.pad5 }} />
          <LineButton
            style={styles.lineButton}
            name="cancel"
            onPress={() => this.props.navigation.navigate("Login")}
          />
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

export default connect(mapStateToProps)(ResetPasswordScreen);
