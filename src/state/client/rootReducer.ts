import { combineReducers } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";
import emailReducer from "./Auth/changepw/emailSlice";
import emailAuthReducer from "./Auth/emailAuth/emailAuthSlice";

const stores = combineReducers({
  root: rootReducer,
  email: emailReducer,
  emailAuth: emailAuthReducer
});

export default stores;
