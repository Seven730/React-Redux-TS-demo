import React from "react";
import styles from "./AppStyles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  handleChange
} from "./redux/actions/actionCreators";
import { RootReducer } from "./redux/reducers/rootReducer";

function App(): JSX.Element {
  // const [counter, setCounter] = useState<number>(0); NOPE
  // const [name, setName] = useState<string>(""); NOPE

  const dispatch = useDispatch();

  const { point1, point2, name } = useSelector((state: RootReducer) => ({
    ...state.countReducer,
    ...state.nameReducer
  }));

  console.log(point1, point2, name);

  return (
    <div className={styles.header}>
      <button onClick={() => dispatch(increment())}>Moshi Moshi?</button>
      <p>{point1}</p>
      <p>{point2}</p>
      <button onClick={() => dispatch(decrement())}>Hello, it's me!</button>
      <input
        placeholder="Type in something"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(handleChange(event))
        }
      />
      <p>{name}</p>
    </div>
  );
}

export default App;
