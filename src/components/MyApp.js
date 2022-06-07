import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementByCounter,
  decrementByCounter,
  incrementCounter,
  resetCounter,
} from "../action-creators/numberActionCreators";

const MyApp = () => {
  const [changeByValue, setChangeByValue] = React.useState(10);

  const counter = useSelector((state) => state.numberReducer.counter);
  const dispatch = useDispatch();

  const handleIncrement = React.useCallback(() => {
    dispatch(incrementCounter());
  }, []);

  const handleDecrement = React.useCallback(() => {
    dispatch(decrementCounter());
  }, []);

  const handleReset = React.useCallback(() => {
    dispatch(resetCounter());
  }, []);

  const handleIncrementBy = React.useCallback(() => {
    dispatch(incrementByCounter(changeByValue));
  }, [changeByValue]);

  const handleDecrementBy = React.useCallback(() => {
    dispatch(decrementByCounter(changeByValue));
  }, [changeByValue]);

  const handleValueChange = React.useCallback((e) => {
    e.preventDefault();
    setChangeByValue(e.target.value ? parseInt(e.target.value) : 0);
  }, []);

  return (
    <div>
      <h3>My App</h3>
      <div>
        <h5>Total:{counter}</h5>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset To zero</button>
        </div>
        <br />
        <div>
          <input
            type="number"
            value={changeByValue}
            onChange={handleValueChange}
          />
          <button onClick={handleIncrementBy}>Increment By</button>
          <button onClick={handleDecrementBy}>Decrement By</button>
        </div>
      </div>
    </div>
  );
};

export default MyApp;
