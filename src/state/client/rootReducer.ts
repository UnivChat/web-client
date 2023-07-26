import { combineReducers } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";
import emailReducer from "./Auth/find-pw/changepw/emailSlice";
import emailAuthReducer from "./Auth/emailAuth/emailAuthSlice";
import findPwReducer from "./Auth/find-pw/findPwSlice";
import changePwReducer from "./Auth/find-pw/changepw/changePwSlice";

const stores = combineReducers({
  root: rootReducer,
  email: emailReducer,
  emailAuth: emailAuthReducer,
  findPw: findPwReducer,
  changePw: changePwReducer
});

export default stores;
