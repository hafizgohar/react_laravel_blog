import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

import { BrowserRouter } from "react-router-dom";
import Handsontable from "handsontable/base";
import { registerAllModules } from "handsontable/registry";

import "../css/app.css";
import "@silevis/reactgrid/styles.css";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
