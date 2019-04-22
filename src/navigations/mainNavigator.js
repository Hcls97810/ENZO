import { createStackNavigator } from "react-navigation";

import ChooseCategoryScreen from "../screens/mainStack/ChooseCategory";
import FoodAndBeverageScreen from "../screens/mainStack/FoodAndBeverage";
import TakeDeal from "../screens/mainStack/TakeDeal";
import EnjoyDeal from "../screens/mainStack/EnjoyDeal";
import CancelDeal from "../screens/mainStack/CancelDeal";

const MainNavigator = createStackNavigator(
  {
    ChooseCategory: { screen: ChooseCategoryScreen },
    FoodAndBeverage: { screen: FoodAndBeverageScreen },
    TakeDeal: { screen: TakeDeal },
    EnjoyDeal: { screen: EnjoyDeal },
    CancelDeal: { screen: CancelDeal }
  },
  {
    initialRouteName: "ChooseCategory",
    headerMode: "none"
  }
);

export default MainNavigator;
