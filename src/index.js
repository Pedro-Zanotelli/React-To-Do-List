import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/style.css";

const root = createRoot(document.querySelector(".root"))
root.render(<App />);