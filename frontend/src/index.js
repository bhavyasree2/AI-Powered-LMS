import React from "react";
import ReactDOM from "react-dom/client"; // Import the correct ReactDOM API
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
root.render(<App />); // Render your app using root.render()

