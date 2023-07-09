import { combineReducers } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";
import emailReducer from "./changepw/emailSlice";

const stores = combineReducers({
  root: rootReducer,
  email: emailReducer
});

export default stores;
