import { createContext } from "react";

import theme from "../theme/theme";
const ThemeContext = createContext(theme.dark);
export default ThemeContext;
