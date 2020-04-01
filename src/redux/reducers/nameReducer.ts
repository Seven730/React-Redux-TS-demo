import { NAME } from "../consts/actionTypes";
import { AnyAction } from "redux";

interface InameReducer {
  name: string;
}

const initialState: InameReducer = {
  name: ""
};

export default function nameReducer(
  state: InameReducer = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}
