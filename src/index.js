import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Only render analytics in production builds
if (process.env.NODE_ENV === "production") {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://umami-h1mf.onrender.com/script.js";
    script.setAttribute(
        "data-website-id",
        "d0a91f26-a63e-41ca-8bb1-833ccc10e41b",
    );
    document.head.appendChild(script);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
