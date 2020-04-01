import { combineReducers } from "redux";
import countReducer from "../reducers/countReducer";
import nameReducer from "../reducers/nameReducer";

export const rootReducer = combineReducers({
  countReducer,
  nameReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type CountReducer = ReturnType<typeof countReducer>;
export type NameReducer = ReturnType<typeof nameReducer>;
