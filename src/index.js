import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Fontawesome icons
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Bootstrap 5.1
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
