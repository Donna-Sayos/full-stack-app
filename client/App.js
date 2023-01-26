import React from "react";
import "./styles.css";
import ReactSwitch from "react-switch";

import AppRoutes from "./AppRoutes";
import { useThemeContext } from "./src/component/context/ThemeProvider";

export default function App() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div id={theme}>
      <div className="main">
        <AppRoutes />
        <div className="switch">
          <label className="switch-label m-1">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </div>
  );
}
