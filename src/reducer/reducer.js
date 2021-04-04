import { useState } from "react";
const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
};

export default useReducer;

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
