import { combineReducers } from "@reduxjs/toolkit";
import { rootReducer } from "./ducks";

const stores = combineReducers({
  root: rootReducer
});

export default stores;
