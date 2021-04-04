import React from "react";
import "./style.css";
import useReducer from "./reducer/reducer";
import userReducer from "./reducer/user/user-reducer";

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
