import React, { useState } from "react";
import "./style.css";

const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          name: action.name
        }
      ];
    default:
      break;
  }
};

// custom reducer hook
/**
 * useReducer accepts a [Reducer] and an [initialSate]
 *
 * dispatch accepts [action] and [newState] and use
 *
 * customReducer accetps [state] and [action]
 *
 * flow
 *  userReducer(customReducer,initialState) returns [state] and [dispatch]
 *  then we pass [state] and [action] to the [dispatch]
 *  then [dispatch] calls [customReducer] and send [state] and [action] as params
 *  [customReducer] return state in return;
 *
 *
 */

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
};

export default function App() {
  const [users, dispatch] = useReducer(userReducer, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :) {}</p>
      <button
        onClick={e => {
          dispatch({
            type: "add",
            name: "Rashid Iqbal"
          });
        }}
      >
        dispatch
      </button>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
}
