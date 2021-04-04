import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";
export default (Text = () => {
  const theme = useContext(ThemeContext);
  return (
    <p style={{ backgroundColor: theme.background, color: theme.color }}>
      Testing context API
    </p>
  );
});
