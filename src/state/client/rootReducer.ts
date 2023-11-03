import { combineReducers } from "@reduxjs/toolkit";
import emailAuthReducer from "./Auth/emailAuth/emailAuthSlice";
import changePwReducer from "./Auth/find-pw/changepw/changePwSlice";
import emailReducer from "./Auth/find-pw/changepw/emailSlice";
import findPwReducer from "./Auth/find-pw/findPwSlice";
import signinReducer from "./Auth/signIn/signInSlice";
import signupReducer from "./Auth/signUp/signUpSlice";
import inquiryReducer from "./config/inquiry/inquirySlice";
import { rootReducer } from "./ducks";
import facilitiesReducer from "./Home/Facilities/facilitiesSlice";
import classNumeducer from "./Chat/classNumberSlice";

const stores = combineReducers({
  root: rootReducer,
  email: emailReducer,
  emailAuth: emailAuthReducer,
  findPw: findPwReducer,
  changePw: changePwReducer,
  signup: signupReducer,
  inquiry: inquiryReducer,
  signin: signinReducer,
  facilities: facilitiesReducer,
  classNumber: classNumeducer
});

export default stores;
