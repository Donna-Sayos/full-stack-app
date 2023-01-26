import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./src/component/context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

// store={store} need to import store and add it to Provider
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        {/* <Provider> */}
        <App />
        {/* </Provider> */}
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
