import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HeroUIProvider>
);
