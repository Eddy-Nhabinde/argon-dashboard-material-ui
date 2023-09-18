import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { ArgonControllerProvider } from "context";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ArgonControllerProvider>
      <PerfectScrollbar>
        <App />
      </PerfectScrollbar>
    </ArgonControllerProvider>
  </BrowserRouter>
);
