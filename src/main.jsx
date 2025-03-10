import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import "./i18n"; // Import the i18n configuration

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
