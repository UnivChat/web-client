import { combineReducers } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";
import emailReducer from "./Auth/find-pw/changepw/emailSlice";
import emailAuthReducer from "./Auth/emailAuth/emailAuthSlice";
import findPwReducer from "./Auth/find-pw/findPwSlice";
import changePwReducer from "./Auth/find-pw/changepw/changePwSlice";
import signupReducer from "./Auth/signUp/signUpSlice";
import inquiryReducer from "./config/inquiry/inquirySlice";

const stores = combineReducers({
  root: rootReducer,
  email: emailReducer,
  emailAuth: emailAuthReducer,
  findPw: findPwReducer,
  changePw: changePwReducer,
  signup: signupReducer,
  inquiry: inquiryReducer
});

export default stores;
