import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";

/**
 * By adding the ! after this method call, you're asserting to the
 * TypeScript compiler that the return value will definitely not be null.
 */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
