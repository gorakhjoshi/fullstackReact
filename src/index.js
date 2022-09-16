import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./components/App";
import "./scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
