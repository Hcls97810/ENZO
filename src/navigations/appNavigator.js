import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthLoadingScreen from "./authLoading";
import AuthNavigator from "./authNavigator";
import MainNavigator from "./mainNavigator";

const AppNavigator = createSwitchNavigator(
  {
    loading: AuthLoadingScreen,
    auth: AuthNavigator,
    main: MainNavigator
  },
  {
    initialRouteName: "loading"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
