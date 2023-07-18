import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

import { BrowserRouter } from "react-router-dom";

import "../css/app.css";
import "@silevis/reactgrid/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
