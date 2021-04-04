import React, { useReducer } from "react";
import "./style.css";
// import useReducer from "./reducer/reducer";
import userReducer from "./reducer/user/user-reducer";
import theme from "./theme/theme";
import Text from "./components/text";
import ThemeContext from "./context/theme-context";

export default function App() {
  const [users, dispatch] = useReducer(userReducer, []);

  return (
    <ThemeContext.Provider value={theme.dark}>
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
        <Text />
        <p> {JSON.stringify(users)} </p>
      </div>
    </ThemeContext.Provider>
  );
}
