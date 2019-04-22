import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/authStack/Login";
import ForgotPasswordScreen from "../screens/authStack/ForgotPassword";
import SignupScreen from "../screens/authStack/Signup";
import VerifyCodeScreen from "../screens/authStack/VerifyCode";
import ResetPasswordScreen from "../screens/authStack/ResetPassword";
import ApprovingAccountScreen from "../screens/authStack/ApprovingAccount";

const AuthNavigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    ForgotPassword: { screen: ForgotPasswordScreen },
    Signup: { screen: SignupScreen },
    VerifyCode: { screen: VerifyCodeScreen },
    ResetPassword: { screen: ResetPasswordScreen },
    ApprovingAccount: { screen: ApprovingAccountScreen },
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default AuthNavigator;
