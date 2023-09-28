import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { ArgonControllerProvider } from "context";

import "react-perfect-scrollbar/dist/css/styles.css";
import { RecoilRoot } from "recoil";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <RecoilRoot>
      <ArgonControllerProvider>
        <App />
      </ArgonControllerProvider>
    </RecoilRoot>
  </BrowserRouter>
);
