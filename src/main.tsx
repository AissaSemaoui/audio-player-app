import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import ThemeProvider from "./theme/ThemeProvider";
import globalStore from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.Fragment>
    <Provider store={globalStore}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.Fragment>
);
