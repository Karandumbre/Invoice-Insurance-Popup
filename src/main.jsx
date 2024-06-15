import React from "react";
import { createRoot } from "react-dom/client";
import { CustomThemeProvider } from "./themes/mui-theme";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

// components
import { Insurance } from "./UI";

// Check if the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Failed to find the root element");
}

const root = createRoot(rootElement);

window.InsuranceModal = {
  mount: (props) => {
    // Ensure props is defined and apiKey matches before rendering
    const apiKey = "1234";
    if (!props || props.apiKey !== apiKey) {
      alert("Please provide a valid api-key");
    } else {
      root.render(
        <React.StrictMode>
          <CustomThemeProvider>
            <Insurance {...props} />
          </CustomThemeProvider>
        </React.StrictMode>
      );
    }
  },
  unmount: () => {
    root.unmount();
  },
};
