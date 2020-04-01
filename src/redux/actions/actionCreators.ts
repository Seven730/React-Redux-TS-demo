import { INCREMENT, DECREMENT, NAME } from "../consts/actionTypes";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const handleChange = (event: any) => ({
  type: NAME,
  payload: event.target.value
});
