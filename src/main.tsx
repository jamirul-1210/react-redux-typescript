import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { persistor, store } from "@app-state/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate
          loading={<div>Loading...</div>}
          persistor={persistor}
        ></PersistGate>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
