import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "@momentum-design/fonts/dist/css/fonts.css";
import "@momentum-design/tokens/dist/css/theme/webex/dark-stable.css";
import "@momentum-design/tokens/dist/css/theme/webex/light-stable.css";
import "@momentum-design/tokens/dist/css/typography/complete.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <mdc-themeprovider>
      <mdc-iconprovider>
        <App />
      </mdc-iconprovider>
    </mdc-themeprovider>
  </React.StrictMode>
);
