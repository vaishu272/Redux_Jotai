import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementbyAmount,
  reset,
} from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState("");

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Redux Counter</h2>

        <h1 className="count">{count}</h1>

        <div className="input-row">
          <input
            className="input"
            type="number"
            placeholder="Enter value"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />

          <button
            className="btn add"
            onClick={() => dispatch(incrementbyAmount(Number(num)))}
          >
            Add Amount
          </button>
        </div>

        <div className="btn-group">
          <button className="btn inc" onClick={() => dispatch(increment())}>
            Increment
          </button>

          <button className="btn dec" onClick={() => dispatch(decrement())}>
            Decrement
          </button>

          <button className="btn reset" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
