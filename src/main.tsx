import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeContextProvider from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>,
);
