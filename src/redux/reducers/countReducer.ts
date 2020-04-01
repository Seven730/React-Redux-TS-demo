import { AnyAction } from "redux";
import { INCREMENT, DECREMENT } from "../consts/actionTypes";

interface IcountReducer {
  point1: number;
  point2: number;
}

const initialState: IcountReducer = {
  point1: 0,
  point2: 2
};

export default function countReducer(
  state: IcountReducer = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        point1: state.point1 + 1
      };
    case DECREMENT:
      return { ...state, point2: state.point2 + 1 };
    default:
      return state;
  }
}
