import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 }
    default:
  }
};

function UseReducer() {
 const [state,disptach] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button
        onClick={() => disptach({ type: "increment" })}
        className="btn btn-primary"
      >
        Increment
      </button>
      <button
        onClick={() => disptach({ type: "decrement" })}
        className="btn btn-primary"
      >
        Decrement
      </button>
    </div>
  );
}

export default UseReducer;
