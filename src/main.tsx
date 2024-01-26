import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./global.css";
import { setupIonicReact } from "@ionic/react";
import { StoreContext, store } from "./app/stores/store";

setupIonicReact();

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
