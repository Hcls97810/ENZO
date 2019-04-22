import { combineReducers } from "redux";

import auth from "./auth";
import business from "./business";
import deal from "./deal";
import influencer from "./influencer";

export default combineReducers({
  auth,
  business,
  deal,
  influencer
});
